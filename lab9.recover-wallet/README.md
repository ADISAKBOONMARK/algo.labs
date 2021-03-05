# Lab 9 : Recover wallet and regenerate account.

This lab is a learn about the behavior of recovery wallets and regenerate accounts.

```javascript
//= ============ Recover wallet and regenerate account =============//
console.log('Recover wallet and regenerate account');

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
console.log('Recovered account: ', recAddr);
```

**NOTE** :

To recover a wallet and any previously generated accounts, use the wallet backup phrase (also called the wallet mnemonic or passphrase). The master derivation key for the wallet will always generate the same addresses in the same order. Therefore the process of recovering an account within the wallet looks exactly like generating a new account.

An offline wallet may not accurately reflect account balances, but the state for those accounts (e.g. its balance, online status) are safely stored on the blockchain. kmd will repopulate those balances when connected to a node.

## Step 1 : Start Lab

```sh
cd algo.labs
./algo.sh lab9
```

OR

```sh
cd algo.labs/lab9.recover-wallet
node index.js
```

Output

```sh
Create a wallet and generate an account.

Wallet: 77933-wallet
ID: b9eba3acb9d8b36d83ef3851ccc7f3fb
Got wallet handle: e14d3918438e5439.497ff23a479e61148114614d18684573a82cf649c6b25cdafa700f98bcd70ad3
Address: EPNRYQEUEXYNDGGPPPDJGD7YRBE4YAZ3VIF3UO7CD6FCXU5YIC3S3SEXFM

Recover wallet and regenerate account.

New Wallet: 51867-wallet
New ID: bdef3a0419b7fb08b4e0ae59deb10f59
Got new wallet handle: b93dba5b4eaabcd1.57178362b0ef9fd43f3474d1a91349b06bfb1c4c5ec5dcc2ad9234ca496e0d8b
Recovered address:  26HIXK4B75ULIOX2OHJRA6S44M64OKQ2YI4URSDOPWY5ID3O34ALBIWX5Q
```

**Completed lab 8** :nerd_face:
