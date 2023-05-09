#!/bin/bash

cd "/Users/osx/Desktop/_Website/"
cd "index"
echo "converting the following images for web:"
echo " "
for f in *\ *; do mv "$f" "${f// /_}"; done
touch ../index.js
echo "var data = [" >> ../index.js
n=$(ls *.jpg | wc -l); c=1
for i in $(ls *.jpg); do

    echo $c "/" $n ":" $i
    echo "{" >> ../index.js
    w=$(identify -format "%w" $i)
    h=$(identify -format "%h" $i)

    if [[ $w -gt $h ]];then

        # 2048w
        convert -resize 2048 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../index_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_large' : '${i%%.*}_$w"x"$h.webp'," >> ../index.js
        echo "'large_width' : '$w', 'large_height' : '$h'," >> ../index.js
        
        # 1536w
        convert -resize 1536 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../index_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_medium' : '${i%%.*}_$w"x"$h.webp'," >> ../index.js
        echo "'medium_width' : '$w', 'medium_height' : '$h'," >> ../index.js

        # 960w
        convert -resize 960 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../index_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_small' : '${i%%.*}_$w"x"$h.webp'," >> ../index.js
        echo "'small_width' : '$w', 'small_height' : '$h'," >> ../index.js

        # 768w
        convert -resize 768 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../index_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_tiny' : '${i%%.*}_$w"x"$h.webp'," >> ../index.js
        echo "'tiny_width' : '$w', 'tiny_height' : '$h'," >> ../index.js

        echo "'description' : 'Test gallery 2'," >> ../index.js
        echo "'format' : 'landscape'," >> ../index.js
        echo "}," >> ../index.js

    else

        # 2048w
        convert -resize x2048 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../index_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_large' : '${i%%.*}_$w"x"$h.webp'," >> ../index.js
        echo "'large_width' : '$w', 'large_height' : '$h'," >> ../index.js
        
        # 1536w
        convert -resize x1536 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../index_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_medium' : '${i%%.*}_$w"x"$h.webp'," >> ../index.js
        echo "'medium_width' : '$w', 'medium_height' : '$h'," >> ../index.js

        # 960w
        convert -resize x960 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../index_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_small' : '${i%%.*}_$w"x"$h.webp'," >> ../index.js
        echo "'small_width' : '$w', 'small_height' : '$h'," >> ../index.js

        # 768w
        convert -resize x768 $i tmp.webp
        w=$(identify -format "%w" tmp.webp)
        h=$(identify -format "%h" tmp.webp)
        mv tmp.webp ../index_webp/${i%%.*}_$w"x"$h".webp"
        echo "'file_tiny' : '${i%%.*}_$w"x"$h.webp'," >> ../index.js
        echo "'tiny_width' : '$w', 'tiny_height' : '$h'," >> ../index.js

        echo "'description' : 'Test gallery 2'," >> ../index.js
        echo "'format' : 'portrait'," >> ../index.js
        echo "}," >> ../index.js

    fi

    let c=c+1 

done

echo "]" >> ../index.js

