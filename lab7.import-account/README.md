# Lab 7 : Import an account.

This lab is a learn about the behavior of import an account.

```javascript
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
```

**NOTE** :

Use these methods to import a 25-word account-level mnemonic.

## Step 1 : Start Lab

```sh
cd algo.labs
./algo.sh lab7
```

OR

```sh
cd algo.labs/lab7.import-account
node index.js
```

Output

```sh
Create a wallet and generate an account.

Wallet: 13356-wallet
ID: 3eca85d45b4432af4fdb97132ed0f9de
Got wallet handle: 37c60736c6ebfe60.4a78cebb5beed7c2e8693d1f33e3f23614116f80f38394ef64ccdc7abfcfda6c

Import an account
My address: LIPQF7UUQLE3KYJCEEJT5CGQNIJKYQK7CPRATIXQIYVQDPZE5RGD7OYLS4
My sk: 188,62,18,207,212,93,57,76,7,243,68,102,245,218,183,50,216,125,217,112,205,11,156,65,172,44,67,158,57,16,190,112,90,31,2,254,148,130,201,181,97,34,33,19,62,136,208,106,18,172,65,95,19,226,9,162,240,70,43,1,191,36,236,76
My passphrase: stuff employ guide tail increase spread oblige eager proud hint fossil lobster wing curve high armed crime rain north tomorrow industry lottery magnet about ship
My balance: 0 microAlgos

Account successfully imported:  LIPQF7UUQLE3KYJCEEJT5CGQNIJKYQK7CPRATIXQIYVQDPZE5RGD7OYLS4
```

**WARNING** : :warning:

For compatibility with other developer tools, goal provides functions to import and export accounts into kmd wallets, however, keep in mind that an imported account can not be recovered/derived from the wallet-level mnemonic. You must always keep track of the account-level mnemonics that you import into kmd wallets.

**Completed lab 7** :nerd_face:
