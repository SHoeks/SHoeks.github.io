#!/bin/bash

cd "/Users/osx/Desktop/_Website/"
cd "color"
echo "converting the following images for web:"
echo " "
for f in *\ *; do mv "$f" "${f// /_}"; done
touch ../color.js
echo "var data = [" >> ../color.js
n=$(ls *.jpg | wc -l); c=1
for i in $(ls *.jpg); do

    echo $c "/" $n ":" $i
    echo "{" >> ../color.js
    w=$(identify -format "%w" $i)
    h=$(identify -format "%h" $i)

    if [[ $w -gt $h ]];then

        # 2048w
        convert -resize 2048 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_large' : '${i%%.*}_$w"x"$h.webp'," >> ../color.js
        echo "'large_width' : '$w', 'large_height' : '$h'," >> ../color.js
        
        # 1536w
        convert -resize 1536 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_medium' : '${i%%.*}_$w"x"$h.webp'," >> ../color.js
        echo "'medium_width' : '$w', 'medium_height' : '$h'," >> ../color.js

        # 960w
        convert -resize 960 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_small' : '${i%%.*}_$w"x"$h.webp'," >> ../color.js
        echo "'small_width' : '$w', 'small_height' : '$h'," >> ../color.js

        # 768w
        convert -resize 768 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_tiny' : '${i%%.*}_$w"x"$h.webp'," >> ../color.js
        echo "'tiny_width' : '$w', 'tiny_height' : '$h'," >> ../color.js

        echo "'description' : 'Test gallery 2'," >> ../color.js
        echo "'format' : 'landscape'," >> ../color.js
        echo "}," >> ../color.js

    else

        # 2048w
        convert -resize x2048 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_large' : '${i%%.*}_$w"x"$h.webp'," >> ../color.js
        echo "'large_width' : '$w', 'large_height' : '$h'," >> ../color.js
        
        # 1536w
        convert -resize x1536 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_medium' : '${i%%.*}_$w"x"$h.webp'," >> ../color.js
        echo "'medium_width' : '$w', 'medium_height' : '$h'," >> ../color.js

        # 960w
        convert -resize x960 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_small' : '${i%%.*}_$w"x"$h.webp'," >> ../color.js
        echo "'small_width' : '$w', 'small_height' : '$h'," >> ../color.js

        # 768w
        convert -resize x768 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../color_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_tiny' : '${i%%.*}_$w"x"$h.webp'," >> ../color.js
        echo "'tiny_width' : '$w', 'tiny_height' : '$h'," >> ../color.js

        echo "'description' : 'Test gallery 2'," >> ../color.js
        echo "'format' : 'portrait'," >> ../color.js
        echo "}," >> ../color.js

    fi

    let c=c+1 

done

echo "]" >> ../color.js

