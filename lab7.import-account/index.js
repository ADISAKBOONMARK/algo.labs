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

        //= ============ Import an account =============//
        console.log('Import an account');

        const account = await algo.sdk.generateAccount();

        console.log('My address: ' + account.addr);

        console.log('My sk: ' + account.sk);

        const passphrase = await algo.sdk.secretKeyToMnemonic(account.sk);

        console.log('My passphrase: ' + passphrase);

        const accountInfo = await algo.client.accountInformation(account.addr).do();

        console.log('My balance: %d microAlgos', accountInfo.amount);

        const importAccount = await algo.kmd.importKey(walletHandle, account.sk);
        console.log('Account successfully imported: ', importAccount.address);
    } catch (err) {
        console.log(err);
    }
}

start();
