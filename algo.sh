#!/bin/bash

commandHelp()
{
    # Display Help
    echo "Add a description of the script commands here."
    echo
    echo "command options:"
    echo
    echo "sandbox       -> Manage sandbox."
    echo "- start       -> Start Algorand Sandbox."
    echo "- stop        -> Stop Algorand Sandbox."
    echo "- restart     -> Restart Algorand Sandbox."
    echo "- status      -> Status Algorand Sandbox."
    echo
    echo "account       -> Manage accounts."
    echo "- create      -> Create accounts. [Bob, Aliza]"
    echo "- balance     -> Check balance accounts. [Bob, Aliza]"
    echo "- pump        -> Add balance to accounts. [Bob, Aliza]"
    echo
    echo "lab1          -> Connection to node."
    echo "lab2          -> Create account."
    echo "lab3          -> Send Algo."
    echo "lab4          -> Wait for Confirmation."
    echo "lab5          -> Read the Transaction."
    echo "lab6          -> Create a wallet and generate an account."
    echo "lab7          -> Import an account."
    echo "lab8          -> Export an account."
    echo "lab9          -> Recover wallet and regenerate account."
    echo "lab10         -> First smart-contract."
    echo    
}

accountFunctionHelp()
{
    # Display Help
    echo "Add a description of the script functions here."
    echo
    echo "function options:"
    echo
    echo "create        -> Create accounts. [Bob, Aliza]"
    echo "balance       -> Check balance accounts. [Bob, Aliza]"
    echo "pump          -> Add balance to accounts. [Bob, Aliza]"
    echo
}

sandboxFunctionHelp()
{
    # Display Help
    echo "Add a description of the script functions here."
    echo
    echo "function options:"
    echo
    echo "start         -> Start Algorand Sandbox."
    echo "stop          -> Stop Algorand Sandbox."
    echo "restart       -> Restart Algorand Sandbox."
    echo "status        -> Status Algorand Sandbox."
    echo
}

COMMAND="${1:-none}"
FUNCTION="${2:-none}"

if [[ "$COMMAND" == "sandbox" ]]
then
    if [[ "$FUNCTION" == "start" ]]
    then
        cd sandbox && node start.js
    elif [[ "$FUNCTION" == "stop" ]]
    then
        cd sandbox && node stop.js
    elif [[ "$FUNCTION" == "restart" ]]
    then
        cd sandbox && node restart.js
    elif [[ "$FUNCTION" == "status" ]]
    then
        cd sandbox && node status.js
    else
        sandboxFunctionHelp
    fi

elif [[ "$COMMAND" == "account" ]]
then
    if [[ "$FUNCTION" == "create" ]]
    then
        cd account && node create.js
    elif [[ "$FUNCTION" == "balance" ]]
    then
        cd account && node balance.js
    elif [[ "$FUNCTION" == "pump" ]]
    then
        cd account && node pump.js
    else
        accountFunctionHelp
    fi

elif [[ "$COMMAND" == "lab1" ]]
then
    cd lab1.connect-node && node index.js

elif [[ "$COMMAND" == "lab2" ]]
then
    cd lab2.create-account && node index.js

elif [[ "$COMMAND" == "lab3" ]]
then
    cd lab3.send-algo && node index.js

elif [[ "$COMMAND" == "lab4" ]]
then
    cd lab4.wait-for-confirmation && node index.js

elif [[ "$COMMAND" == "lab5" ]]
then
    cd lab5.read-transaction && node index.js

elif [[ "$COMMAND" == "lab6" ]]
then
    cd lab6.create-wallet && node index.js

elif [[ "$COMMAND" == "lab7" ]]
then
    cd lab7.import-account && node index.js

elif [[ "$COMMAND" == "lab8" ]]
then
    cd lab8.export-account && node index.js

elif [[ "$COMMAND" == "lab9" ]]
then
    cd lab9.recover-wallet && node index.js

elif [[ "$COMMAND" == "lab10" ]]
then
    cd lab10.first-smartcontract && node index.js

else
   commandHelp
fi


