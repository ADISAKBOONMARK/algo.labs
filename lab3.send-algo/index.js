const algo = require('../config');

async function start() {
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

            console.log(
                `Wait to 5 - 10 sec. and try to check the balance of ${fromAccount.name} and ${toAccount.name} again.`,
            );
        } catch (err) {
            console.log(err);
        }
    };

    const bob = await algo.bob();
    const aliza = await algo.aliza();

    await checkBalance(algo.client, bob);
    await checkBalance(algo.client, aliza);

    await transfer(algo.client, bob, aliza, 1000000, 'Hello World');

    const P = ['.'];
    let x = 0;
    const loader = setInterval(() => {
        process.stdout.write(`${P[x++]}`);
        x %= P.length;
    }, 250);

    setTimeout(async () => {
        clearInterval(loader);
        console.log();

        await checkBalance(algo.client, bob);
        await checkBalance(algo.client, aliza);
    }, 10000);
}

start();
