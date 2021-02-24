const algo = require('../config');

async function start() {
    const bob = await algo.bob();
    const aliza = await algo.aliza();

    await checkBalance(bob);
    await checkBalance(aliza);
}

async function checkBalance(account) {
    console.log(account.name + ' address: ' + account.addr);

    const accountInfo = await algo.client.accountInformation(account.addr).do();

    console.log(account.name + ' balance: %d microAlgos', accountInfo.amount);
}

start();
