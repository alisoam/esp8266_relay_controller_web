D#! /bin/bash

rm -rf public.min
mkdir public.min

cp public/index.html public.min/index

cp public/about/index.html public.min/about.html

cp public/settings/index.html public.min/settings.html
cp public/settings/wifi/index.html public.min/wifi.html
cp public/settings/ap/index.html public.min/ap.html
cp public/settings/mqtt/index.html public.min/mqtt.html

cp public/assets/bootstrap.min.css public.min/bootstrap.css
cp public/assets/bootstrap.min.js public.min/bootstrap.js
cp public/assets/feather.min.js public.min/feather.js
cp public/assets/jquery-3.3.1.min.js public.min/jquery.js
cp public/assets/popper.min.js public.min/popper.js
cp public/assets/scripts.js public.min/scripts.js
cp public/assets/style.css public.min/style.css
cp public/assets/styles.css public.min/styles.css

find public.min -type f \
  ! -name  "*.html" \
  ! -name  "*.ico" \
  ! -name  "*.js" \
  ! -name  "*.css" \
  -exec rm -rf {} \;

find public.min/ -type f \
  -name "*.html" \
  -exec echo {} \; \
  -exec minify -o {}.min {} \; \
  -exec rm {} \; \
  -exec mv {}.min {} \;

find public.min/ -type f \
  -name "*.js" \
  ! -name "*.min.js" \
  -exec echo {} \; \
  -exec minify -o {}.min {} \; \
  -exec rm {} \; \
  -exec mv {}.min {} \;

find public.min/ -type f \
  -name "*.css" \
  ! -name "*.min.css" \
  -exec echo {} \; \
  -exec minify -o {}.min {} \; \
  -exec rm {} \; \
  -exec mv {}.min {} \;

find public.min/ -type f \
  -exec gzip {} \;
