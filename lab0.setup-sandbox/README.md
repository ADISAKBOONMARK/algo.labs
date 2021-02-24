# Lab 0 : Setup Algorand Sandbox.

Before when you start learning labs. You will setup the Algorand sandbox.

You can make it by flow step from [Algorand Sandbox](https://github.com/algorand/sandbox).

## Step 1: Download Sandbox

-   You must be clone the Algorand Sandbox to your server by the command below.

```sh
git clone https://github.com/algorand/sandbox.git
```

## Step 2: Start Sandbox

-   When you install the Algorand sandbox completely. Now you all ready to start it by the command below.

```sh
cd sandbox
./sandbox up
```

## Step 3: Check Sandbox is All Ready

-   If you start the Algorand Sandbox is completed you should similar the result below.

```sh
./sandbox status
```

Output

```sh
algod - goal node status
Last committed block: 4
Time since last block: 2.4s
Sync Time: 0.0s
Last consensus protocol: future
Next consensus protocol: future
Round for next consensus protocol: 5
Next consensus protocol supported: true
Last Catchpoint:
Genesis ID: sandnet-v1
Genesis hash: hjwlQd4y0eS5/ZsTlK7ux4e7BPf1DL1EAPYWDlNmvS4=

indexer - health
{
  "data": {
    "migration-required": false,
    "read-only-node": true
  },
  "db-available": true,
  "is-migrating": false,
  "message": "3",
  "round": 3
}
```

-   Check your docker container should similar to the result below.

```sh
./docker ps
```

Output

```sh
CONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                              NAMES
9f707a3c8981        algosandbox_indexer   "/tmp/start.sh"          3 hours ago         Up 14 minutes       0.0.0.0:8980->8980/tcp             algorand-sandbox-indexer
f967e72404a2        postgres:13-alpine    "docker-entrypoint.s…"   3 hours ago         Up 14 minutes       0.0.0.0:5433->5432/tcp             algorand-sandbox-postgres
ece8da1eab24        algosandbox_algod     "/opt/start_algod.sh"    3 hours ago         Up 14 minutes       0.0.0.0:4001-4002->4001-4002/tcp   algorand-sandbox-algod
```

**Completed lab 0** :nerd_face:
