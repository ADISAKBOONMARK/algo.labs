#!/bin/bash

Help()
{
   # Display Help
   echo "Add a description of the script functions here."
   echo
   echo "lab options:"
   echo "lab1   Connection to node."
   echo "lab2   Create account."
   echo
}


LAB="${1:-none}"

if [[ "$LAB" == "lab1" ]]
then
    cd lab1.connect-node && node index.js
elif [[ "$LAB" == "lab2" ]]
then
    cd lab2.create-account && node index.js
else
   Help
fi


