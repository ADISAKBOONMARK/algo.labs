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

        const sk = new Uint8Array(fromAccount.sk.split(','));
        const signedTxn = await txn.signTxn(sk);

        const txId = await txn.txID().toString();
        console.log(fromAccount.name + ' signed a transaction with txID: %s', txId);

        console.log(
            `Sent ${microAlgos} microAlgos from account ${fromAccount.addr} to address ${toAccount.addr}, transaction ID: ${txId}. Fee set to ${params.fee} microAlgos`,
        );

        try {
            await algodClient.sendRawTransaction(signedTxn).do();

            console.log(
                `Wait to 5 - 10 sec. and try to check the balance of ${fromAccount.name} and ${toAccount.name} again.`,
            );

            await waitForConfirmation(algodClient, txId, 100);

            console.log('Sending Completed!!');
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
