# Lab 1 : Connect to Node.

This lab is a test connection to the Algorand node. When you set up the Algorand sandbox is done.

## Step 1 : Start Lab

```sh
cd algo.labs
./algo.sh lab1
```

OR

```sh
cd algo.labs/lab1.connect-node
node index.js
```

Output

```sh
Algorand network status: {
  catchpoint: '',
  'catchpoint-acquired-blocks': 0,
  'catchpoint-processed-accounts': 0,
  'catchpoint-total-accounts': 0,
  'catchpoint-total-blocks': 0,
  'catchpoint-verified-accounts': 0,
  'catchup-time': 0,
  'last-catchpoint': '',
  'last-round': 390,
  'last-version': 'future',
  'next-version': 'future',
  'next-version-round': 391,
  'next-version-supported': true,
  'stopped-at-unsupported-round': false,
  'time-since-last-round': 1853645914
}
Algorand suggested parameters: {
  flatFee: false,
  fee: 0,
  firstRound: 390,
  lastRound: 1390,
  genesisID: 'sandnet-v1',
  genesisHash: 'hjwlQd4y0eS5/ZsTlK7ux4e7BPf1DL1EAPYWDlNmvS4='
}
```

**Completed lab 1** :nerd_face:
