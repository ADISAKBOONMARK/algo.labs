#!/bin/bash

Help()
{
   # Display Help
   echo "Add a description of the script functions here."
   echo "command options:"
   echo "setup  Create are accounts [Bob, Aliza]."
   echo "lab1   Connection to node."
   echo "lab2   Create account."
   echo
}

COMMAND="${1:-none}"

if [[ "$COMMAND" == "setup" ]]
then
    cd account && node index.js
elif [[ "$COMMAND" == "lab1" ]]
then
    cd lab1.connect-node && node index.js
elif [[ "$COMMAND" == "lab2" ]]
then
    cd lab2.create-account && node index.js
else
   Help
fi


