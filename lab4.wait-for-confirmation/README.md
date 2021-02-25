# Lab 4 : Wait for Confirmation.

This lab is a learn about the behavior of the **waitForConfirmation** function.

```javascript
// Utility function to wait on a transaction to be confirmed
// The timeout parameter indicates how many rounds do you wish to check pending transactions for

const waitForConfirmation = async function (algodclient, txId, timeout) {
    // Wait until the transaction is confirmed or rejected, or until 'timeout' number of rounds has passed.
    //
    // Args:
    //      txId(str): the transaction to wait for
    //      timeout(int): maximum number of rounds to wait
    //
    // Returns:
    //      pending transaction information, or throws an error if the transaction is not confirmed or rejected in the next timeout rounds

    if (algodclient == null || txId == null || timeout < 0) {
        throw new Error('Bad arguments.');
    }

    const status = await algodclient.status().do();

    if (status === undefined) throw new Error('Unable to get node status');

    const startround = status['last-round'] + 1;

    let currentround = startround;

    while (currentround < startround + timeout) {
        const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();

        if (pendingInfo !== undefined) {
            if (pendingInfo['confirmed-round'] !== null && pendingInfo['confirmed-round'] > 0) {
                // Got the completed Transaction
                return pendingInfo;
            } else {
                if (pendingInfo['pool-error'] != null && pendingInfo['pool-error'].length > 0) {
                    // If there was a pool error, then the transaction has been rejected!
                    throw new Error('Transaction Rejected' + ' pool error' + pendingInfo['pool-error']);
                }
            }
        }

        await algodclient.statusAfterBlock(currentround).do();

        currentround++;
    }

    throw new Error('Transaction not confirmed after ' + timeout + ' rounds!');
};
```

**NOTE** :

Successfully submitting your transaction to the network does not necessarily mean the network confirmed it. Always check that the network confirmed your transaction within a block before proceeding.

On Algorand, transactions are final as soon as they are incorporated into a block and blocks are produced, on average, every 5 seconds. This means that transactions are confirmed, on average, in 5 seconds! Read more about the [Algorand's Consensus Protocol](https://developer.algorand.org/docs/algorand_consensus/) and how it achieves such high confirmation speeds and immediate transaction finality.

## Step 1 : Start Lab

```sh
cd algo.labs
./algo.sh lab4
```

OR

```sh
cd algo.labs/lab4.wait-for-confirmation
node index.js
```

Output

```sh
Bob address: 6IMWHZIWK4ABCPI4CSAC4BPRGVID6W4N5S7NVRN4DGSUAERC4JI3RU3N7U
Bob balance: 10000000 microAlgos

Aliza address: PTDAPQIH2GQGW4VAB2YM5436YHZEW26UVCCDCDZ2LW3CFMBONKVTVFRPZI
Aliza balance: 10000000 microAlgos

Bob signed a transaction with txID: UFOYRJJOBPM4LOTCE5N2YVUROGMIZJ7T3DDDCRYH665UPXFOUCZQ

Wait to 5 - 10 sec. and try to check the balance of Bob and Aliza again.

Sending Completed!!

Bob address: 6IMWHZIWK4ABCPI4CSAC4BPRGVID6W4N5S7NVRN4DGSUAERC4JI3RU3N7U
Bob balance: 8999000 microAlgos

Aliza address: PTDAPQIH2GQGW4VAB2YM5436YHZEW26UVCCDCDZ2LW3CFMBONKVTVFRPZI
Aliza balance: 11000000 microAlgos
```

**WARNING** : :warning:

When amount the microAlgos is not enough. Please use the **Pump!!** service.

```sh
cd algo.labs
./algo.sh account pump
```

OR

```sh
cd algo.labs/account
node pump.js
```

Output

```sh
Sent 10000000 MicroAlgos from account HJATUIYSNT2NI6WAOE6TRWBUJFBDM5RPYOGIRZPYXF3U2OPHFTV3NCVIKM to address AAONGYS2WSRAKEXB6W6NDXWOMY2VFRBOIBLAR6LZOHOFSOIIOEWGTCPT34, transaction ID: HOGOOLUIYFWRPIXNDQJK2YJ2426G6F3EDGPUATVRVMW3IB4SX5UA. Fee set to 1000
Transaction HOGOOLUIYFWRPIXNDQJK2YJ2426G6F3EDGPUATVRVMW3IB4SX5UA still pending as of round 548
Transaction HOGOOLUIYFWRPIXNDQJK2YJ2426G6F3EDGPUATVRVMW3IB4SX5UA committed in round 550

Sent 10000000 MicroAlgos from account HJATUIYSNT2NI6WAOE6TRWBUJFBDM5RPYOGIRZPYXF3U2OPHFTV3NCVIKM to address XR6WOS2HCPPEGCS4JKDTBMS7RDYJVS5UJAWPJXXRDFBBHLUVVPB46NOH6Y, transaction ID: UVMWBZPEAUQ4HKABQQBHP2H5GB5AUJBZW3OJOPYLPBMIOOHYKUNA. Fee set to 1000
Transaction UVMWBZPEAUQ4HKABQQBHP2H5GB5AUJBZW3OJOPYLPBMIOOHYKUNA still pending as of round 550
Transaction UVMWBZPEAUQ4HKABQQBHP2H5GB5AUJBZW3OJOPYLPBMIOOHYKUNA committed in round 552
```

**Completed lab 4** :nerd_face:
