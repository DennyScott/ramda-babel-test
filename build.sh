npx @svgr/cli -d src svg
for filename in src/*.js; do
  echo "${filename}"
done