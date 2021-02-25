# Lab 4 : Wait for Confirmation.

This lab is a learn about the behavior of the waitForConfirmation function.

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
