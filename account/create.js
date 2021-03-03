const fs = require('fs');
const execShPromise = require('exec-sh').promise;

const algo = require('../config');

const faker = require('faker');

async function start() {
    const wallet = await createWallet();

    const bobAccount = await createAccount('Bob');
    const alizaAccount = await createAccount('Aliza');

    await importAccount(wallet, bobAccount);
    await importAccount(wallet, alizaAccount);
}

async function addBalance(account) {
    try {
        await execShPromise('./sandbox goal clerk send -a 10000000 -f ' + algo.masterAddr + ' -t ' + account.addr, {
            cwd: algo.sandboxPath,
        });
    } catch (err) {
        console.log(err);
    }
}

async function importAccount(wallet, account) {
    try {
        //= ============ Import an account =============//
        console.log('Import an account');

        console.log('Address: ' + account.addr);

        const passphrase = await algo.sdk.secretKeyToMnemonic(account.sk);

        console.log('Passphrase: ' + passphrase);

        const importAccount = await algo.kmd.importKey(wallet.handle, account.sk);
        console.log('Account successfully imported: ', importAccount.address);

        try {
            const data = fs.readFileSync('../account/Wallet.json', 'utf8');
            const wallet = JSON.parse(data);

            account.sk = account.sk.toString();
            wallet.accounts.push(account);

            await fs.writeFileSync('../account/Wallet.json', JSON.stringify(wallet));
        } catch (err) {
            // console.log(err);
        }
    } catch (err) {
        console.log(err);
    }
}

async function createWallet() {
    const result = {
        number: '',
        password: '',
        id: '',
        handle: '',
        accounts: [],
    };

    try {
        //= ============ Create a wallet =============//
        console.log('==== start create a wallet ====');

        const walletNumber = faker.random.number() + '-wallet';
        console.log('Wallet:', walletNumber);
        result.number = walletNumber;

        const password = 'pwd';
        result.password = password;

        const walletId = (await algo.kmd.createWallet(walletNumber, password, '', 'sqlite')).wallet.id;
        console.log('ID:', walletId);
        result.id = walletId;

        const walletHandle = (await algo.kmd.initWalletHandle(walletId, password)).wallet_handle_token;
        console.log('Got wallet handle:', walletHandle);
        result.handle = walletHandle;

        try {
            await fs.writeFileSync('../account/Wallet.json', JSON.stringify(result));
        } catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.log(err);
    }

    console.log('==== end create a wallet ====');

    return result;
}

async function createAccount(name) {
    const result = {
        name: name,
        addr: '',
        sk: '',
        passphrase: '',
    };

    console.log('==== start create account ====');

    const account = await algo.sdk.generateAccount();

    console.log(name + ' address: ' + account.addr);
    result.addr = account.addr;

    console.log(name + ' sk: ' + account.sk);
    result.sk = account.sk;

    const passphrase = await algo.sdk.secretKeyToMnemonic(account.sk);

    console.log(name + ' passphrase: ' + passphrase);
    result.passphrase = passphrase;

    await addBalance(account);

    const accountInfo = await algo.client.accountInformation(account.addr).do();

    console.log(name + ' balance: %d microAlgos', accountInfo.amount);

    const data = {
        name: name,
        addr: account.addr,
        sk: account.sk.toString(),
        passphrase: passphrase,
    };

    try {
        await fs.writeFileSync('../account/' + name + '.json', JSON.stringify(data));
    } catch (err) {
        console.log(err);
    }

    console.log('==== end create account ====');

    return result;
}

start();
