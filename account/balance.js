const algo = require('../config');

async function start() {
    const bob = await algo.bob();
    const aliza = await algo.aliza();

    await checkBalance('Bob', bob);
    await checkBalance('Aliza', aliza);
}

async function checkBalance(name, account) {
    console.log(name + ' address: ' + account.addr);

    const accountInfo = await algo.client.accountInformation(account.addr).do();

    console.log(name + ' balance: %d microAlgos', accountInfo.amount);
}

start();
