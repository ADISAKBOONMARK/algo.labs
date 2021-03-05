# ![](./doc/algo.png) Algorand Labs

This project is a learning Algorand. We hope it is helpful to beginners. This project will be compile on **Ubuntu 18.04.4 LTS**.

## Reference

Algorand Developer : https://developer.algorand.org/

## Required Software

-   Node Js [Download](https://nodejs.org/en/)
-   Git [Download](https://git-scm.com/)
-   Docker [Download](https://docs.docker.com/engine/install/ubuntu/)
-   Docker Compose [Download](https://docs.docker.com/compose/install/)

## Required IDE

-   Visual Studio Code (VSCode) [Download](https://code.visualstudio.com/) **extension**
    -   Prettier [Download](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    -   Eslint [Download](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    -   Gitlens [Download](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## Download

```sh
git clone https://github.com/ADISAKBOONMARK/algo.labs.git
```

## Setting

-   Install node package.

```sh
cd algo.labs
./npm i
```

-   Create **.env** file.

```sh
LABS_PATH=/home/users/algo.labs

SANDBOX_PATH=/home/users/
MASTER_ADDR=HJATUIYSNT2NI6WAOE6TRWBUJFBDM5RPYOGIRZPYXF3U2OPHFTV3NCVIKM
```

> LABS_PATH : Path of Algorand Labs directory.

```sh
cd algo.labs
pwd
```

> SANDBOX_PATH : Path of [Algorand Sandbox.](./lab0.setup-sandbox/README.md) directory.

```sh
cd sandbox
pwd
```

> MASTER_ADDR : Address of master account.

```sh
./sandbox goal account list

[offline]       CNX7XBECXSHMY2OXZANPWPPJVRZDPDDV2ISASXAQXBE2TNDZAVVFLIJNHQ      CNX7XBECXSHMY2OXZANPWPPJVRZDPDDV2ISASXAQXBE2TNDZAVVFLIJNHQ      1000000000000000 microAlgos
[online]        HJATUIYSNT2NI6WAOE6TRWBUJFBDM5RPYOGIRZPYXF3U2OPHFTV3NCVIKM      HJATUIYSNT2NI6WAOE6TRWBUJFBDM5RPYOGIRZPYXF3U2OPHFTV3NCVIKM      4000000000000000 microAlgos
[offline]       WVN443LZ5NGIINZWFAHT4UPR36VPQBNOSY66KL4GR6MRG7ULGORXK6ARF4      WVN443LZ5NGIINZWFAHT4UPR36VPQBNOSY66KL4GR6MRG7ULGORXK6ARF4      4000000000000000 microAlgos
```

## Outlines

-   Local Network
    -   Lab 0 : [Setup Algorand Sandbox.](./lab0.setup-sandbox/README.md)
-   SDK
    -   Lab 1 : [Connect to Node.](./lab1.connect-node/README.md)
    -   Lab 2 : [Create Account.](./lab2.create-account/README.md)
    -   Lab 3 : [Send Algorand to Address.](./lab3.send-algo/README.md)
    -   Lab 4 : [Wait for Confirmation.](./lab4.wait-for-confirmation/README.md)
    -   Lab 5 : [Read the Transaction.](./lab5.read-transaction/README.md)
-   KMD
    -   Lab 6 : [Create a wallet and generate an account.](./lab6.create-wallet/README.md)
    -   Lab 7 : [Import an account.](./lab7.import-account/README.md)
    -   Lab 8 : [Export an account.](./lab8.export-account/README.md)
    -   Lab 9 : [Recover wallet and regenerate account.](./lab9.recover-wallet/README.md)
-   Smart Contracts
    -   Lab X : ...

## Command

```sh
./algo.sh

Add a description of the script commands here.

command options:

sandbox       -> Manage sandbox.
- start       -> Start Algorand Sandbox.
- stop        -> Stop Algorand Sandbox.
- restart     -> Restart Algorand Sandbox.
- status      -> Status Algorand Sandbox.

account       -> Manage accounts.
- create      -> Create accounts. [Bob, Aliza]
- balance     -> Check balance accounts. [Bob, Aliza]
- pump        -> Add balance to accounts. [Bob, Aliza]

lab1          -> Connection to node.
lab2          -> Create account.
lab3          -> Send Algo.
lab4          -> Wait for Confirmation.
lab5          -> Read the Transaction.
lab6          -> Create a wallet and generate an account.
lab7          -> Import an account.
lab8          -> Export an account.
lab9          -> Recover wallet and regenerate account.
```

---

## Donate :pray:

**My Wallet:**

![](./doc/my-wallet.jpg)

**My QR-Code:**

![](./doc/my-qr-code.jpg)

**My Algorand Address:** GQT3W5URGDKYLGZJELLXMKQBIJBDEXFYNGYFIM7JSPY64DTHDKCVYQA3O4
