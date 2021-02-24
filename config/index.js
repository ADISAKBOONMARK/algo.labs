const env = require('dotenv').config({ path: '../.env' });
const fs = require('fs');

const algosdk = require('algosdk');

const algo = {
    token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    server: 'http://localhost',
    port: 4001,
};

async function setBob() {
    let bob = {
        name: 'Bob',
        addr: 'xxxx',
        sk: 'xxxx',
        passphrase: 'xxxx',
    };

    try {
        const data = fs.readFileSync('../account/Bob.json', 'utf8');
        bob = JSON.parse(data);
    } catch (err) {
        // console.log(err);
    }

    return bob;
}

async function setAliza() {
    let aliza = {
        name: 'Aliza',
        addr: 'xxxx',
        sk: 'xxxx',
        passphrase: 'xxxx',
    };

    try {
        const data = fs.readFileSync('../account/Aliza.json', 'utf8');
        aliza = JSON.parse(data);
    } catch (err) {
        // console.log(err);
    }

    return aliza;
}

module.exports = Object.freeze({
    token: algo.token,
    server: algo.server,
    port: algo.port,
    client: new algosdk.Algodv2(algo.token, algo.server, algo.port),
    sdk: algosdk,
    bob: setBob,
    aliza: setAliza,
    sandboxPath: env.parsed.SANDBOX_PATH,
    masterAddr: env.parsed.MASTER_ADDR,
});
