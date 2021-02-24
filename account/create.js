const fs = require('fs');
const execShPromise = require('exec-sh').promise;

const algo = require('../config');

async function start() {
    await createAccount('Bob');
    await createAccount('Aliza');
}

async function addBalance(account) {
    try {
        await execShPromise('./sandbox goal clerk send -a 10000000 -f ' + algo.masterAddr + ' -t ' + account.addr, {
            cwd: algo.sandboxPath,
        });
    } catch (err) {
        console.log(err);
    }
}

async function createAccount(name) {
    console.log('==== start create account ====');

    const account = await algo.sdk.generateAccount();

    console.log(name + ' address: ' + account.addr);

    console.log(name + ' sk: ' + account.sk);

    const passphrase = await algo.sdk.secretKeyToMnemonic(account.sk);

    console.log(name + ' passphrase: ' + passphrase);

    await addBalance(account);

    const accountInfo = await algo.client.accountInformation(account.addr).do();

    console.log(name + ' balance: %d microAlgos', accountInfo.amount);

    const data = {
        name: name,
        addr: account.addr,
        sk: account.sk.toString(),
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
