#!/bin/bash

echo "Initialisation de la base utilisateur..."

/usr/bin/mongo localhost/theGallery --eval "db.users.save({name:'yves', password:'06cd924ee34d3918ec6c28ccb24623faba3b8e08'})"

echo "Done !"