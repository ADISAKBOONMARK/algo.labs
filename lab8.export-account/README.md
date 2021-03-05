# Lab 8 : Export an account.

This lab is a learn about the behavior of import an account.

```javascript
//= ============ Export an account =============//
console.log('Export an account');

const account = await algo.kmd.exportKey(walletHandle, password, address);
const mn = await algo.sdk.secretKeyToMnemonic(account.private_key);
console.log('Account Mnemonic: ', mn);
```

**NOTE** :

Use this to retrieve the 25-word mnemonic for the account.

## Step 1 : Start Lab

```sh
cd algo.labs
./algo.sh lab8
```

OR

```sh
cd algo.labs/lab8.export-account
node index.js
```

Output

```sh
Create a wallet and generate an account.

Wallet: 60275-wallet
ID: 18c2cb40a32b473740ccaa6296f300fb
Got wallet handle: 1cf48b55a6ec6680.c9ae265c82110a97ed4d28b163ac41eb1c016f06a5d91aed5f5e431927d5f560

Address: E4V7ZJTGCTO6ZQWUB5WG5HGTKOOYFH4EUYDTUGMKUDCXQV2JAYOFHZS7SA
Balance: 0 microAlgos

Export an account
Account Mnemonic:  repeat olympic grunt captain tail civil monster meat tray jungle trip myself soap school hundred pyramid praise opinion fancy zone future weather penalty about large
```

**Completed lab 8** :nerd_face:
