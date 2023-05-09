#!/bin/bash

cd "/Volumes/Websites/WEBSITE_Selwyn/Website/"
cd "main"
qlty=80
current_date=$(date +%Y_%m_%d_%H_%M)
exp_dir="exports_"$current_date
mkdir $exp_dir
mv *.jpg $exp_dir
cd $exp_dir
touch main_tmp.js

echo "converting the following images for web:"
ls *.jpg
echo " "
for f in *\ *; do mv "$f" "${f// /_}"; done

n=$(ls *.jpg | wc -l); c=1
for i in $(ls *.jpg); do

    echo $c "/" $n ":" $i
    echo "{" >> main_tmp.js
    w=$(identify -format "%w" $i)
    h=$(identify -format "%h" $i)

    if [[ $w -gt $h ]];then

        # 2048w
        convert -quality $qlty -resize 2048 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../main_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_large' : '${i%%.*}_$w"x"$h.webp'," >> main_tmp.js
        echo "'large_width' : '$w', 'large_height' : '$h'," >> main_tmp.js
        
        # 1536w
        convert -quality $qlty -resize 1536 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../main_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_medium' : '${i%%.*}_$w"x"$h.webp'," >> main_tmp.js
        echo "'medium_width' : '$w', 'medium_height' : '$h'," >> main_tmp.js

        # 960w
        convert -quality $qlty -resize 960 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../main_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_small' : '${i%%.*}_$w"x"$h.webp'," >> main_tmp.js
        echo "'small_width' : '$w', 'small_height' : '$h'," >> main_tmp.js

        # 768w
        convert -quality $qlty -resize 768 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../main_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_tiny' : '${i%%.*}_$w"x"$h.webp'," >> main_tmp.js
        echo "'tiny_width' : '$w', 'tiny_height' : '$h'," >> main_tmp.js

        echo "'description' : 'Test gallery 2'," >> main_tmp.js
        echo "'format' : 'landscape'," >> main_tmp.js
        echo "'style_id' : 'w50_m'," >> main_tmp.js
        echo "}," >> main_tmp.js

    else

        # 2048w
        convert -quality $qlty -resize x2048 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../main_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_large' : '${i%%.*}_$w"x"$h.webp'," >> main_tmp.js
        echo "'large_width' : '$w', 'large_height' : '$h'," >> main_tmp.js
        
        # 1536w
        convert -quality $qlty -resize x1536 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../main_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_medium' : '${i%%.*}_$w"x"$h.webp'," >> main_tmp.js
        echo "'medium_width' : '$w', 'medium_height' : '$h'," >> main_tmp.js

        # 960w
        convert -quality $qlty -resize x960 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../main_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_small' : '${i%%.*}_$w"x"$h.webp'," >> main_tmp.js
        echo "'small_width' : '$w', 'small_height' : '$h'," >> main_tmp.js

        # 768w
        convert -quality $qlty -resize x768 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../../main_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_tiny' : '${i%%.*}_$w"x"$h.webp'," >> main_tmp.js
        echo "'tiny_width' : '$w', 'tiny_height' : '$h'," >> main_tmp.js

        echo "'description' : 'Test gallery 2'," >> main_tmp.js
        echo "'format' : 'portrait'," >> main_tmp.js
        echo "'style_id' : 'w50p_m'," >> main_tmp.js
        echo "}," >> main_tmp.js

    fi

    let c=c+1 

done

lineNum="$(grep -n "new data gets automatically inserted above" ../../main.js | head -n 1 | cut -d: -f1)"
let lineNum-=3
sed -i.bak "${lineNum}r main_tmp.js" ../../main.js
cd ../../


