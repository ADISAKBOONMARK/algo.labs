const algo = require('../config');

async function start() {
    const bobAccount = await algo.sdk.generateAccount();
    console.log('Bob address: ' + bobAccount.addr);

    let accountInfo = await algo.client.accountInformation(bobAccount.addr).do();
    console.log('Bob balance: %d microAlgos', accountInfo.amount);

    const alizaAccount = await algo.sdk.generateAccount();
    console.log('Aliza address: ' + alizaAccount.addr);

    accountInfo = await algo.client.accountInformation(alizaAccount.addr).do();
    console.log('Aliza balance: %d microAlgos', accountInfo.amount);

    const params = await algo.client.getTransactionParams().do();

    // comment out the next two lines to use suggested fee
    params.fee = 1000;
    params.flatFee = true;

    const note = await algo.sdk.encodeObj('Hello World');
    const txn = await algo.sdk.makePaymentTxnWithSuggestedParams(
        bobAccount.addr,
        alizaAccount.addr,
        1000000,
        undefined,
        note,
        params,
    );

    const signedTxn = await txn.signTxn(bobAccount.sk);
    const txId = await txn.txID().toString();
    console.log('Bob signed a transaction with txID: %s', txId);

    try {
        await algo.client.sendRawTransaction(signedTxn).do();
    } catch (err) {
        console.log(err);
    }

    accountInfo = await algo.client.accountInformation(bobAccount.addr).do();
    console.log('Bob balance: %d microAlgos', accountInfo.amount);

    accountInfo = await algo.client
        .accountInformation('EOOF2JJ3SOBNO7KFD5YDYVNKXTJJELNFXEJYOIAN5ZSKMB3QWBL4MQCSMU')
        .do();
    console.log('Aliza balance: %d microAlgos', accountInfo.amount);
}

start();
