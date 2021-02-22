const algosdk = require('algosdk');

const algo = {
    token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    server: 'http://localhost',
    port: 4001,
};

module.exports = Object.freeze({
    token: algo.token,
    server: algo.server,
    port: algo.port,
    client: new algosdk.Algodv2(algo.token, algo.server, algo.port),
});
