rm -r ./.main
omi init-mp ./.main

cp -ri ./.main/src-mp/component.wxss ./.main/component.wxss
rm -r ./.main/src-mp
mkdir ./.main/src-mp
mkdir ./.main/src-mp/components

# rm -r ./.main/src/mp
# mkdir ./.main/src/mp

cp -ri ./tools/demo/* ./.main/src-mp
cp -ri ./src/* ./.main/src-mp/components/
cp -ri ./.main/component.wxss ./.main/src-mp/component.wxss

# cp -ri ./.main/src-mp/* ./.main/src/mp/
cd ./.main
npm run wx-component-build
# ./node_modules/.bin/gulp copy components app-wxss pages-wxss components-wxss pages appjs route
npm run build
rm -r ../build
mkdir ../build
cp  -ri ./build/* ../build
cd ..
rm -r ./.main
