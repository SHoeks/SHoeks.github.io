#!/bin/bash

cd "/Users/osx/Documents/Websites/WEBSITE_Selwyn/Website/"
cd "color"
qlty=80
current_date=$(date +%Y_%m_%d_%H_%M)
exp_dir="exports_"$current_date
mkdir $exp_dir
mv *.jpg $exp_dir
cd $exp_dir
if [[ 1 -gt 2 ]]; then
    mkdir backup
    for i in $(ls *.jpg); do 
        ../../assets/./stretchjpg "$i"
        mv "$i" backup/"$i"
        mv ${i%%.*}"_out.JPG" "$i"
    done
fi

touch color_tmp.js

echo "converting the following images for web:"
ls *.jpg
echo " "
for f in *\ *; do mv "$f" "${f// /_}"; done

n=$(ls *.jpg | wc -l); c=1
for i in $(ls *.jpg); do

    echo $c "/" $n ":" $i
    echo "{" >> color_tmp.js
    w=$(identify -format "%w" $i)
    h=$(identify -format "%h" $i)

    if [[ $w -gt $h ]];then

        # 2048w
        convert -quality $qlty -resize 2048 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_large' : '${i%%.*}_$w"x"$h.webp'," >> color_tmp.js
        echo "'large_width' : '$w', 'large_height' : '$h'," >> color_tmp.js
        
        # 1536w
        convert -quality $qlty -resize 1536 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_medium' : '${i%%.*}_$w"x"$h.webp'," >> color_tmp.js
        echo "'medium_width' : '$w', 'medium_height' : '$h'," >> color_tmp.js

        # 960w
        convert -quality $qlty -resize 960 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_small' : '${i%%.*}_$w"x"$h.webp'," >> color_tmp.js
        echo "'small_width' : '$w', 'small_height' : '$h'," >> color_tmp.js

        # 768w
        convert -quality $qlty -resize 768 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_tiny' : '${i%%.*}_$w"x"$h.webp'," >> color_tmp.js
        echo "'tiny_width' : '$w', 'tiny_height' : '$h'," >> color_tmp.js

        echo "'description' : 'Test gallery 2'," >> color_tmp.js
        echo "'format' : 'landscape'," >> color_tmp.js
        echo "}," >> color_tmp.js

    else

        # 2048w
        convert -quality $qlty -resize x2048 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_large' : '${i%%.*}_$w"x"$h.webp'," >> color_tmp.js
        echo "'large_width' : '$w', 'large_height' : '$h'," >> color_tmp.js
        
        # 1536w
        convert -quality $qlty -resize x1536 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_medium' : '${i%%.*}_$w"x"$h.webp'," >> color_tmp.js
        echo "'medium_width' : '$w', 'medium_height' : '$h'," >> color_tmp.js

        # 960w
        convert -quality $qlty -resize x960 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_small' : '${i%%.*}_$w"x"$h.webp'," >> color_tmp.js
        echo "'small_width' : '$w', 'small_height' : '$h'," >> color_tmp.js

        # 768w
        convert -quality $qlty -resize x768 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_tiny' : '${i%%.*}_$w"x"$h.webp'," >> color_tmp.js
        echo "'tiny_width' : '$w', 'tiny_height' : '$h'," >> color_tmp.js

        echo "'description' : 'Test gallery 2'," >> color_tmp.js
        echo "'format' : 'portrait'," >> color_tmp.js
        echo "}," >> color_tmp.js

    fi

    let c=c+1 

done

lineNum="$(grep -n "new data gets automatically inserted above" ../../color.js | head -n 1 | cut -d: -f1)"
let lineNum-=3
sed -i.bak "${lineNum}r color_tmp.js" ../../color.js
cd ../../


