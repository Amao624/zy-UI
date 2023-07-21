#!/bin/bash
echo "------开始打包------"
npm run build
echo "------打包结束------"

echo "------更换到npm源------"
npm config set registry https://registry.npmjs.org/

echo "------记得修改版本号哟！------"
echo "------发布------"
npm publish

echo "------切换回淘宝源------"
npm config set registry=https://registry.npm.taobao.org/

echo "------发布成功------"