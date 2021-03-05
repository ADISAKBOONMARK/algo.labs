const algo = require('../config');

const faker = require('faker');

async function start() {
    try {
        //= ============ Create a wallet and generate an account =============//
        console.log('Create a wallet and generate an account.');

        const walletNumber = faker.random.number() + '-wallet';
        console.log('Wallet:', walletNumber);

        const password = 'pwd';

        const walletId = (await algo.kmd.createWallet(walletNumber, password, '', 'sqlite')).wallet.id;
        console.log('ID:', walletId);

        const walletHandle = (await algo.kmd.initWalletHandle(walletId, password)).wallet_handle_token;
        console.log('Got wallet handle:', walletHandle);

        const address = (await algo.kmd.generateKey(walletHandle)).address;
        console.log('Address:', address);

        const accountInfo = await algo.client.accountInformation(address).do();
        console.log('Balance: %d microAlgos', accountInfo.amount);

        //= ============ Export an account =============//
        console.log('Export an account');

        const account = await algo.kmd.exportKey(walletHandle, password, address);
        const mn = await algo.sdk.secretKeyToMnemonic(account.private_key);
        console.log('Account Mnemonic: ', mn);
    } catch (err) {
        console.log(err);
    }
}

start();
