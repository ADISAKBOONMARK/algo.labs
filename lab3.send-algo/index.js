const algo = require('../config');

async function start() {
    const bob = await algo.bob();
    const aliza = await algo.aliza();

    console.log('Bob address: ' + bob.addr);

    let accountInfo = await algo.client.accountInformation(bob.addr).do();
    console.log('Bob balance: %d microAlgos', accountInfo.amount);

    console.log('Aliza address: ' + aliza.addr);

    accountInfo = await algo.client.accountInformation(aliza.addr).do();
    console.log('Aliza balance: %d microAlgos', accountInfo.amount);

    const params = await algo.client.getTransactionParams().do();

    // comment out the next two lines to use suggested fee
    params.fee = 1000;
    params.flatFee = true;

    const note = await algo.sdk.encodeObj('Hello World');
    const txn = await algo.sdk.makePaymentTxnWithSuggestedParams(
        bob.addr,
        aliza.addr,
        1000000,
        undefined,
        note,
        params,
    );

    const sk = new Uint8Array(bob.sk.split(','));
    const signedTxn = await txn.signTxn(sk);

    const txId = await txn.txID().toString();
    console.log('Bob signed a transaction with txID: %s', txId);

    try {
        await algo.client.sendRawTransaction(signedTxn).do();
    } catch (err) {
        console.log(err);
    }

    accountInfo = await algo.client.accountInformation(bob.addr).do();
    console.log('Bob balance: %d microAlgos', accountInfo.amount);

    accountInfo = await algo.client.accountInformation(aliza.addr).do();
    console.log('Aliza balance: %d microAlgos', accountInfo.amount);
}

start();
