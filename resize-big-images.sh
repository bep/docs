#!/bin/bash 

# This needs imagemagick to be installed
# e.g. brew install imagemagick

handle_pngs () {
    # https://gist.github.com/JesseRWeigel/756cc507cbe59084d66e376eaf05c6e9 
   find docs -type f -name "*.png" -size +200k| xargs -n 4 -P 4 mogrify -resize 1500x\> -filter Triangle -define filter:support=2 -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality 75 -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB 
}

handle_jpgs () {
   find docs -type f -name "*.jpg" -size +200k| xargs -n 4 -P 4 mogrify -resize 1500x\> -strip -interlace Plane -sampling-factor 4:2:0 -quality 75% -colorspace sRGB
}


handle_pngs
handle_jpgs

