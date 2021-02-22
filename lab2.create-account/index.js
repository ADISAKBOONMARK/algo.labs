const algo = require('../config');

async function start() {
    const account = await algo.sdk.generateAccount();

    console.log('My address: ' + JSON.stringify(account.addr));

    const passphrase = await algo.sdk.secretKeyToMnemonic(account.sk);

    console.log('My passphrase: ' + passphrase);

    const accountInfo = await algo.client.accountInformation(account.addr).do();

    console.log('Account balance: %d microAlgos', accountInfo.amount);
}

start();
