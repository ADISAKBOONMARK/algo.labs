const algo = require('../config');

async function start() {
    const status = await algo.client.status().do();

    console.log('Algorand network status: %o', status);

    const params = await algo.client.getTransactionParams().do();

    console.log('Algorand suggested parameters: %o', params);
}

start();
