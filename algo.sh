#!/bin/bash

commandHelp()
{
    # Display Help
    echo "Add a description of the script commands here."
    echo
    echo "command options:"
    echo
    echo "account       -> Manage accounts."
    echo "- create      -> Create accounts. [Bob, Aliza]"
    echo "- balance     -> Check balance accounts. [Bob, Aliza]"
    echo "- pump        -> Add balance to accounts. [Bob, Aliza]"
    echo
    echo "lab1          -> Connection to node."
    echo "lab2          -> Create account."
    echo "lab3          -> Send Algo."
    echo "lab4          -> Wait For Confirmation."
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

else
   commandHelp
fi


