const fs = require('fs');

const algo = require('../config');

async function start() {
    await createAccount('bob');
    await createAccount('aliza');
}

async function createAccount(name) {
    console.log('==== start create account ====');

    const account = await algo.sdk.generateAccount();

    console.log(name + ' address: ' + account.addr);

    console.log(name + ' sk: ' + account.sk);

    const passphrase = await algo.sdk.secretKeyToMnemonic(account.sk);

    console.log(name + ' passphrase: ' + passphrase);

    const accountInfo = await algo.client.accountInformation(account.addr).do();

    console.log(name + ' balance: %d microAlgos', accountInfo.amount);

    const data = {
        addr: account.addr,
        sk: account.sk,
        passphrase: passphrase,
    };

    try {
        await fs.writeFileSync('../account/' + name + '.json', JSON.stringify(data));
    } catch (err) {
        console.log(err);
    }

    console.log('==== end create account ====');
}

start();
