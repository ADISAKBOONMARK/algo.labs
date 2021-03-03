# Lab 6 : Create a wallet and generate an account.

This lab is a learn about the behavior of creating a wallet and generate an account.

```javascript
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
```

**NOTE** :

Create a new wallet and generate an account. In the SDKs, connect to kmd through a kmd client then create a new wallet. With the wallet handle, generate an account.

## Step 1 : Start Lab

```sh
cd algo.labs
./algo.sh lab6
```

OR

```sh
cd algo.labs/lab6.create-wallet
node index.js
```

Output

```sh
Create a wallet and generate an account.
Wallet: 8793-wallet
ID: 95c507152cbbdbdee9d49cc265b69cab
Got wallet handle: d1ab4f4d3781784f.c166f509959e886663cc69618851903a724b0ea5469ecbf1c52ec26a2fc2f096
Address: Q2VQ6HKGNHKHPDDSJRA6ZQWJMPCZJPEQNFAEPJOGLMSYLAK2HOE5JK5FVA
Balance: 0 microAlgos
```

**Completed lab 6** :nerd_face:
