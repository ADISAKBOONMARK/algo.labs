const algo = require('../config');

async function start() {
    // Utility function to wait on a transaction to be confirmed
    // The timeout parameter indicates how many rounds do you wish to check pending transactions for

    const waitForConfirmation = async function (algodClient, txId, timeout) {
        // Wait until the transaction is confirmed or rejected, or until 'timeout' number of rounds has passed.
        //
        // Args:
        //      txId(str): the transaction to wait for
        //      timeout(int): maximum number of rounds to wait
        //
        // Returns:
        //      pending transaction information, or throws an error if the transaction is not confirmed or rejected in the next timeout rounds

        if (algodClient == null || txId == null || timeout < 0) {
            throw new Error('Bad arguments.');
        }

        const status = await algodClient.status().do();

        if (status === undefined) throw new Error('Unable to get node status');

        const startround = status['last-round'] + 1;

        let currentround = startround;

        while (currentround < startround + timeout) {
            const pendingInfo = await algodClient.pendingTransactionInformation(txId).do();

            if (pendingInfo !== undefined) {
                if (pendingInfo['confirmed-round'] !== null && pendingInfo['confirmed-round'] > 0) {
                    // Got the completed Transaction
                    return pendingInfo;
                } else {
                    if (pendingInfo['pool-error'] != null && pendingInfo['pool-error'].length > 0) {
                        // If there was a pool error, then the transaction has been rejected!
                        throw new Error('Transaction Rejected' + ' pool error' + pendingInfo['pool-error']);
                    }
                }
            }

            await algodClient.statusAfterBlock(currentround).do();

            currentround++;
        }

        throw new Error('Transaction not confirmed after ' + timeout + ' rounds!');
    };

    const checkBalance = async function (algodClient, account) {
        console.log(account.name + ' address: ' + account.addr);

        const accountInfo = await algodClient.accountInformation(account.addr).do();
        console.log(account.name + ' balance: %d microAlgos', accountInfo.amount);
    };

    const transfer = async function (algodClient, fromAccount, toAccount, microAlgos, message) {
        const params = await algodClient.getTransactionParams().do();

        // comment out the next two lines to use suggested fee
        params.fee = 1000;
        params.flatFee = true;

        const note = await algo.sdk.encodeObj(message);
        const txn = await algo.sdk.makePaymentTxnWithSuggestedParams(
            fromAccount.addr,
            toAccount.addr,
            microAlgos,
            undefined,
            note,
            params,
        );

        const sk = new Uint8Array(bob.sk.split(','));
        const signedTxn = await txn.signTxn(sk);

        const txId = await txn.txID().toString();
        console.log(fromAccount.name + ' signed a transaction with txID: %s', txId);

        console.log(
            `Sent ${microAlgos} microAlgos from account ${fromAccount.addr} to address ${toAccount.addr}, transaction ID: ${txId}. Fee set to ${params.fee} microAlgos`,
        );

        try {
            await algodClient.sendRawTransaction(signedTxn).do();

            // Get the pending Transaction
            const status = await algodClient.status().do();
            const pendingRound = status['last-round'] + 1;
            console.log('Transaction ' + txId + ' still pending as of round ' + pendingRound);

            const P = ['.'];
            let x = 0;
            const loader = setInterval(() => {
                process.stdout.write(`${P[x++]}`);
                x %= P.length;
            }, 250);

            // Wait for confirmation
            const confirmedTxn = await waitForConfirmation(algodClient, txId, 4);

            clearInterval(loader);
            console.log();

            // Get the completed Transaction
            console.log('Transaction ' + txId + ' confirmed in round ' + confirmedTxn['confirmed-round']);

            const mytxinfo = JSON.stringify(confirmedTxn.txn.txn);
            console.log('Transaction information: %o', mytxinfo);

            const msg = new TextDecoder('utf-8').decode(confirmedTxn.txn.txn.note);
            console.log('Message:', msg.replace(/[^a-zA-Z-:. ]/g, ''));
        } catch (err) {
            console.log(err);
        }
    };

    const bob = await algo.bob();
    const aliza = await algo.aliza();

    await checkBalance(algo.client, bob);
    await checkBalance(algo.client, aliza);

    await transfer(algo.client, bob, aliza, 1000000, 'Hello World');

    await checkBalance(algo.client, bob);
    await checkBalance(algo.client, aliza);
}

start();
