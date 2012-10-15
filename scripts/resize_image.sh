#!/bin/bash

echo "Which folder do you want to resize : "
read folder

cd ../public/images/"$folder"

mkdir initial-size
cp *.* ./initial-size/

for file in `ls *.*`
do
	convert "$file" -density 36 -geometry 50x50% "$file"
done

cd -
