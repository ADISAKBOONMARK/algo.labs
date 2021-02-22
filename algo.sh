#!/bin/bash

Help()
{
   # Display Help
   echo "Add a description of the script functions here."
   echo
   echo "lab options:"
   echo "lab1   Test connection to node."
   echo
}


LAB="${1:-none}"

if [[ "$LAB" == "lab1" ]]
then
    cd lab1.test-connect-node && node index.js
elif [[ "$LAB" == "lab2" ]]
then
    cd lab2.create-account && node index.js
else
   Help
fi


