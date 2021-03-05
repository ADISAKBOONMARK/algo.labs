const algo = require('../config');

const faker = require('faker');

async function start() {
    try {
        //= ============ Create a wallet and generate an account =============//
        console.log('Create a wallet and generate an account.');

        let walletNumber = faker.random.number() + '-wallet';
        console.log('Wallet:', walletNumber);

        const password = 'pwd';

        let walletId = (await algo.kmd.createWallet(walletNumber, password, '', 'sqlite')).wallet.id;
        console.log('ID:', walletId);

        let walletHandle = (await algo.kmd.initWalletHandle(walletId, password)).wallet_handle_token;
        console.log('Got wallet handle:', walletHandle);

        const address = (await algo.kmd.generateKey(walletHandle)).address;
        console.log('Address:', address);

        //= ============ Recover wallet and regenerate account =============//
        console.log('Recover wallet and regenerate account.');

        const accountKey = await algo.kmd.exportKey(walletHandle, password, address);
        const mn = await algo.sdk.secretKeyToMnemonic(accountKey.private_key);

        const mdk = await algo.sdk.mnemonicToMasterDerivationKey(mn);
        // console.log('MDK:', mdk);

        walletNumber = faker.random.number() + '-wallet';
        console.log('New Wallet:', walletNumber);

        walletId = (await algo.kmd.createWallet(walletNumber, password, mdk)).wallet.id;
        console.log('New ID:', walletId);

        walletHandle = (await algo.kmd.initWalletHandle(walletId, password)).wallet_handle_token;
        console.log('Got new wallet handle:', walletHandle);

        const recAddr = (await algo.kmd.generateKey(walletHandle)).address;
        console.log('Recovered address: ', recAddr);
    } catch (err) {
        console.log(err);
    }
}

start();
