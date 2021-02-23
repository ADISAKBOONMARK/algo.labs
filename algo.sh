#!/bin/bash

commandHelp()
{
    # Display Help
    echo "Add a description of the script commands here."
    echo "command options:"
    echo "account    -> Manage accounts."
    echo "lab1       -> Connection to node."
    echo "lab2       -> Create account."
    echo
}

accountFunctionHelp()
{
    # Display Help
    echo "Add a description of the script functions here."
    echo "function options:"
    echo "create     -> Create accounts. [Bob, Aliza]"
    echo "balance    -> Check balance accounts. [Bob, Aliza]"
    echo
}


COMMAND="${1:-none}"
FUNCTION="${2:-none}"

if [[ "$COMMAND" == "account" ]]
then
    if [[ "$FUNCTION" == "create" ]]
    then
        cd account && node create.js
    elif [[ "$FUNCTION" == "balance" ]]
    then
        cd account && node balance.js
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

else
   commandHelp
fi


