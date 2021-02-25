# Lab 5 : Read the Transaction.

This lab is a learn about the behavior of reading the transaction.

```javascript
...

// Get the completed Transaction
console.log('Transaction ' + txId + ' confirmed in round ' + confirmedTxn['confirmed-round']);

const mytxinfo = JSON.stringify(confirmedTxn.txn.txn);
console.log('Transaction information: %o', mytxinfo);

const msg = new TextDecoder('utf-8').decode(confirmedTxn.txn.txn.note);
console.log('Message:', msg.replace(/[^a-zA-Z-:. ]/g, ''));
```

**NOTE** :

Although you can read any transaction on the blockchain, only archival nodes store the whole history. By default, most nodes store only the last 1000 rounds and the APIs return errors when calling for information from earlier rounds. If you need to access data further back, make sure your algod client is connected to an archival, indexer node. Read more about node configurations in the Network Participation Guide or reach out to your service provider to understand how their node is configured.

## Step 1 : Start Lab

```sh
cd algo.labs
./algo.sh lab5
```

OR

```sh
cd algo.labs/lab5.read-transaction
node index.js
```

Output

```sh
Bob address: 2UV6JWX75DVVZ5U6NMV7YDVQFKRTE5MWPR7WOFFWRB67Y4KAB7PNUQALEM
Bob balance: 10000000 microAlgos

Aliza address: H7FMNDNFV3SLJTBS6WGBT6ERFFK5PEFO63F2TFLX5EMG2VTWP4ZQDRWE7E
Aliza balance: 10000000 microAlgos

Bob signed a transaction with txID: TYEAXTMJSNRM3ISRCHJ2LHKNWDN5FHN2563EYRVDWQGNMMNUUEAA

Sent 1000000 microAlgos from account 2UV6JWX75DVVZ5U6NMV7YDVQFKRTE5MWPR7WOFFWRB67Y4KAB7PNUQALEM to address H7FMNDNFV3SLJTBS6WGBT6ERFFK5PEFO63F2TFLX5EMG2VTWP4ZQDRWE7E, transaction ID: TYEAXTMJSNRM3ISRCHJ2LHKNWDN5FHN2563EYRVDWQGNMMNUUEAA. Fee set to 1000 microAlgos

Transaction TYEAXTMJSNRM3ISRCHJ2LHKNWDN5FHN2563EYRVDWQGNMMNUUEAA still pending as of round 19

.............................

Transaction TYEAXTMJSNRM3ISRCHJ2LHKNWDN5FHN2563EYRVDWQGNMMNUUEAA confirmed in round 20
Transaction information: '{"amt":1000000,"fee":1000,"fv":18,"gen":"sandnet-v1","gh":{"0":134,"1":60,"2":37,"3":65,"4":222,"5":50,"6":209,"7":228,"8":185,"9":253,"10":155,"11":19,"12":148,"13":174,"14":238,"15":199,"16":135,"17":187,"18":4,"19":247,"20":245,"21":12,"22":189,"23":68,"24":0,"25":246,"26":22,"27":14,"28":83,"29":102,"30":189,"31":46},"lv":1018,"note":{"0":171,"1":72,"2":101,"3":108,"4":108,"5":111,"6":32,"7":87,"8":111,"9":114,"10":108,"11":100},"rcv":{"0":63,"1":202,"2":198,"3":141,"4":165,"5":174,"6":228,"7":180,"8":204,"9":50,"10":245,"11":140,"12":25,"13":248,"14":145,"15":41,"16":85,"17":215,"18":144,"19":174,"20":246,"21":203,"22":169,"23":149,"24":119,"25":233,"26":24,"27":109,"28":86,"29":118,"30":127,"31":51},"snd":{"0":213,"1":43,"2":228,"3":218,"4":255,"5":232,"6":235,"7":92,"8":246,"9":158,"10":107,"11":43,"12":252,"13":14,"14":176,"15":42,"16":163,"17":50,"18":117,"19":150,"20":124,"21":127,"22":103,"23":20,"24":182,"25":136,"26":125,"27":252,"28":113,"29":64,"30":15,"31":222},"type":"pay"}'
Message: Hello World

Bob address: 2UV6JWX75DVVZ5U6NMV7YDVQFKRTE5MWPR7WOFFWRB67Y4KAB7PNUQALEM
Bob balance: 8999000 microAlgos

Aliza address: H7FMNDNFV3SLJTBS6WGBT6ERFFK5PEFO63F2TFLX5EMG2VTWP4ZQDRWE7E
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

**Completed lab 5** :nerd_face:
