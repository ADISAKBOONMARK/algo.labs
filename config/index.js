const env = require('dotenv').config({ path: '../.env' });
const fs = require('fs');

const algosdk = require('algosdk');

const algo = {
    token: env.parsed.ALGO_TOKEN || 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    server: env.parsed.ALGO_SERVER || 'http://localhost',
    port: env.parsed.ALGO_PORT || 4001,
};

const kmd = {
    token: env.parsed.KMD_TOKEN || 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    server: env.parsed.KMD_SERVER || 'http://localhost',
    port: env.parsed.KMD_PORT || 4002,
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
    kmd: new algosdk.Kmd(kmd.token, kmd.server, kmd.port),
    sdk: algosdk,
    bob: setBob,
    aliza: setAliza,
    labsPath: env.parsed.LABS_PATH,
    sandboxPath: env.parsed.SANDBOX_PATH,
    masterAddr: env.parsed.MASTER_ADDR,
});
