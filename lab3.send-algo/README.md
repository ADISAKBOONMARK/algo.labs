# Lab 3 : Send Algorand to Address.

This lab is a test to send the Algorand to accounts.

## Step 1 : Create Account [Bob, Aliza]

-   Before when you start this lab. You will create accounts for Bob and Aliza.

```sh
cd algo.labs
./algo.sh account create
```

OR

```sh
cd algo.labs/account
node create.js
```

Output

```sh
==== start create account ====
Bob address: B7B3WJWJPO4D62BXUWU2EOULKSH6MXH4NX4YQRCCNHKIZKSK4VLCKDBGOU
Bob sk: 158,121,234,249,56,73,110,95,42,49,71,185,218,86,200,54,82,25,23,231,62,31,118,88,39,93,70,68,93,90,33,94,15,195,187,38,201,123,184,63,104,55,165,169,162,58,139,84,143,230,92,252,109,249,136,68,66,105,212,140,170,74,229,86
Bob passphrase: critic prepare language near symptom oak matter elbow fire fork goddess casino crawl shift warm busy attract output company dutch ritual final valve able job
Sent 10000000 MicroAlgos from account HJATUIYSNT2NI6WAOE6TRWBUJFBDM5RPYOGIRZPYXF3U2OPHFTV3NCVIKM to address B7B3WJWJPO4D62BXUWU2EOULKSH6MXH4NX4YQRCCNHKIZKSK4VLCKDBGOU, transaction ID: OHHUZCAJ3TXVVVJXVEYOUVZL3PSWEPOUQSTMH2PZTOJZNJLVP7QA. Fee set to 1000
Transaction OHHUZCAJ3TXVVVJXVEYOUVZL3PSWEPOUQSTMH2PZTOJZNJLVP7QA still pending as of round 3034
Transaction OHHUZCAJ3TXVVVJXVEYOUVZL3PSWEPOUQSTMH2PZTOJZNJLVP7QA committed in round 3036
Bob balance: 10000000 microAlgos
==== end create account ====
==== start create account ====
Aliza address: 2YC7WMCW6DORD6FGZF5DHO6YA7RTEBST6JE3OBT36AMNQRJG5FDHXJHOPI
Aliza sk: 32,13,240,9,208,121,115,168,220,111,169,140,90,23,211,18,1,205,216,101,188,224,152,152,201,163,161,20,93,57,177,104,214,5,251,48,86,240,221,17,248,166,201,122,51,187,216,7,227,50,6,83,242,73,183,6,123,240,24,216,69,38,233,70
Aliza passphrase: piano scan agent other tragic claw leave practice face frost hat bachelor old involve tobacco thing basic chapter spin energy riot exact easily about dinner
Sent 10000000 MicroAlgos from account HJATUIYSNT2NI6WAOE6TRWBUJFBDM5RPYOGIRZPYXF3U2OPHFTV3NCVIKM to address 2YC7WMCW6DORD6FGZF5DHO6YA7RTEBST6JE3OBT36AMNQRJG5FDHXJHOPI, transaction ID: OUHZ2P5MH644MSVGH4TRUMODFPXC3JPOI2YWRODAVMKAS5IEDUBA. Fee set to 1000
Transaction OUHZ2P5MH644MSVGH4TRUMODFPXC3JPOI2YWRODAVMKAS5IEDUBA still pending as of round 3036
Transaction OUHZ2P5MH644MSVGH4TRUMODFPXC3JPOI2YWRODAVMKAS5IEDUBA committed in round 3038
Aliza balance: 10000000 microAlgos
==== end create account ====
```

-   In the directory **account** will have Bob and Aliza account detail.

```sh
cd algo.labs/account
cat Bob.json
cat Aliza.json
```

Output

```sh
{"name":"Bob","addr":"B7B3WJWJPO4D62BXUWU2EOULKSH6MXH4NX4YQRCCNHKIZKSK4VLCKDBGOU","sk":"158,121,234,249,56,73,110,95,42,49,71,185,218,86,200,54,82,25,23,231,62,31,118,88,39,93,70,68,93,90,33,94,15,195,187,38,201,123,184,63,104,55,165,169,162,58,139,84,143,230,92,252,109,249,136,68,66,105,212,140,170,74,229,86","passphrase":"critic prepare language near symptom oak matter elbow fire fork goddess casino crawl shift warm busy attract output company dutch ritual final valve able job"}

{"name":"Aliza","addr":"2YC7WMCW6DORD6FGZF5DHO6YA7RTEBST6JE3OBT36AMNQRJG5FDHXJHOPI","sk":"32,13,240,9,208,121,115,168,220,111,169,140,90,23,211,18,1,205,216,101,188,224,152,152,201,163,161,20,93,57,177,104,214,5,251,48,86,240,221,17,248,166,201,122,51,187,216,7,227,50,6,83,242,73,183,6,123,240,24,216,69,38,233,70","passphrase":"piano scan agent other tragic claw leave practice face frost hat bachelor old involve tobacco thing basic chapter spin energy riot exact easily about dinner"}
```

-   You can check the balance by the command below.

```sh
cd algo.labs
./algo.sh account balance
```

OR

```sh
cd algo.labs/account
node balance.js
```

Output

```sh
Bob address: B7B3WJWJPO4D62BXUWU2EOULKSH6MXH4NX4YQRCCNHKIZKSK4VLCKDBGOU
Bob balance: 10000010 microAlgos

Aliza address: 2YC7WMCW6DORD6FGZF5DHO6YA7RTEBST6JE3OBT36AMNQRJG5FDHXJHOPI
Aliza balance: 10000010 microAlgos
```

## Step 2 : Transfer Algorand from Bob to Aliza.

-   Transfer 1000000 microAlgos from Bob to Aliza.

```sh
cd algo.labs
./algo.sh lab3
```

OR

```sh
cd algo.labs/lab3.send-algo
node index.js
```

Output

```sh
Bob address: B7B3WJWJPO4D62BXUWU2EOULKSH6MXH4NX4YQRCCNHKIZKSK4VLCKDBGOU
Bob balance: 10000010 microAlgos

Aliza address: 2YC7WMCW6DORD6FGZF5DHO6YA7RTEBST6JE3OBT36AMNQRJG5FDHXJHOPI
Aliza balance: 10000010 microAlgos

Bob signed a transaction with txID: ZROHIY2MU5OBMQH7YZXS3SGURY3X6I5C6KFK73NTZTZLCPMJXZKQ

Bob send 1000000 microAlgos to Aliza that has a fee of just 1000 microAlgos.

wait to 5 - 10 sec. and try to check the balance of Bob and Aliza again.
```

**NOTE** :

Successfully submitting your transaction to the network does not necessarily mean the network confirmed it. Always check that the network confirmed your transaction within a block before proceeding.

On Algorand, transactions are final as soon as they are incorporated into a block and blocks are produced, on average, every 5 seconds. This means that transactions are confirmed, on average, in 5 seconds! Read more about the [Algorand's Consensus Protocol](https://developer.algorand.org/docs/algorand_consensus/) and how it achieves such high confirmation speeds and immediate transaction finality.

## Step 3 : Check the balance.

```sh
cd algo.labs
./algo.sh account balance
```

OR

```sh
cd algo.labs/account
node balance.js
```

Output

```sh
Bob address: QNIGWZC47K4T35F6DTW67BWRA4CWVUZ6FTU4BTXGUP42IUVYNLYNON4CMY
Bob balance: 8999010 microAlgos

Aliza address: XDTRDO42KIVMTWDYHZGCYK6D6RKTB4J4PX6ID7U36VPHUJ4O2LINNHWSHI
Aliza balance: 11000010 microAlgos
```

**Completed lab 3** :nerd_face:
