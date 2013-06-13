#!/bin/bash

if [ $# -ne 3 ]
then
    echo 'usage : .inject_data.sh <USER_EMAIL> <USER_PASSWORD> <pictures || collages || drawings>'
else
    email=$1
    password=$2
    imgType=$3

    case $imgType in
    pictures)
        url='https://plus.google.com/photos/101647645728397863445/albums/5887876319986076353'
        ;;
    collages)
        url='https://plus.google.com/u/0/photos/101647645728397863445/albums/5887874990394434849'
        ;;
    drawings)
        url='https://plus.google.com/u/0/photos/101647645728397863445/albums/5887865885864963713'
        ;;
    esac


    # Fetch g+ to get the values
    casperjs getImgHref.js $email $password $url > data.tmp


    # Format the data
    echo '' > ./data.json

    startLine='{"type":"'$imgType'","href":"","hrefMin":"'
    endLine='"},'

    for row in `cat ./data.tmp`
    do
        echo ${startLine}${row}${endLine} >> ./data.json
    done


    # Import the data in mongodb
    #mongoimport -h ds039027.mongolab.com:39027 -d heroku_app8244270 -c images -u admin -p 06cd924ee34d3918ec6c28ccb24623faba3b8e08 --file data.json

    rm ./data.tmp
    rm ./data.json
fi