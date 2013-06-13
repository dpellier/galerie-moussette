#!/bin/bash

cd /home/dpellier/Pictures/theGallery/Photos

mkdir initial-size
cp *.* ./initial-size/

for file in `ls *.*`
do
	#convert "$file" -density 36 -geometry 50x50% "$file"
	convert -compress JPEG -quality 20 "$file" "$file"
done

cd -
