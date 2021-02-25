const algo = require('../config');

async function start() {
    // Utility function to wait on a transaction to be confirmed
    // The timeout parameter indicates how many rounds do you wish to check pending transactions for

    const waitForConfirmation = async function (algodclient, txId, timeout) {
        // Wait until the transaction is confirmed or rejected, or until 'timeout' number of rounds has passed.
        //
        // Args:
        //      txId(str): the transaction to wait for
        //      timeout(int): maximum number of rounds to wait
        //
        // Returns:
        //      pending transaction information, or throws an error if the transaction is not confirmed or rejected in the next timeout rounds

        if (algodclient == null || txId == null || timeout < 0) {
            throw new Error('Bad arguments.');
        }

        const status = await algodclient.status().do();

        if (status === undefined) throw new Error('Unable to get node status');

        const startround = status['last-round'] + 1;

        let currentround = startround;

        while (currentround < startround + timeout) {
            const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();

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

            await algodclient.statusAfterBlock(currentround).do();

            currentround++;
        }

        throw new Error('Transaction not confirmed after ' + timeout + ' rounds!');
    };

    const checkBalance = async function (algodclient, account) {
        console.log(account.name + ' address: ' + account.addr);

        const accountInfo = await algodclient.accountInformation(account.addr).do();
        console.log(account.name + ' balance: %d microAlgos', accountInfo.amount);
    };

    const transfer = async function (algodclient, fromAccount, toAccount, microAlgos, message) {
        const params = await algodclient.getTransactionParams().do();

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

        try {
            await algodclient.sendRawTransaction(signedTxn).do();

            console.log(
                `Wait to 5 - 10 sec. and try to check the balance of ${fromAccount.name} and ${toAccount.name} again.`,
            );

            await waitForConfirmation(algodclient, txId, 100);

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
