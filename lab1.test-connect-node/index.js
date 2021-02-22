const algosdk = require('algosdk');

const algodToken = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const algodServer = 'http://localhost';
const algodPort = 4002;

async function start() {
    const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

    const status = await algodClient.status().do();

    console.log('Algorand network status: %o', status);

    const params = await algodClient.getTransactionParams().do();

    console.log('Algorand suggested parameters: %o', params);
}

start();
