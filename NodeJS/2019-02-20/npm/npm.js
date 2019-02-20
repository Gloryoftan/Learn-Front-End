/* 
npm 
Node Package Manager

初始化
npm init
npm init -y 无需改变配置

npm install express
下载了node_modules，是express的依赖
npm i express -save(之前的版本里，不会自动添加dependencies)

重要的tips
利用 npm install
可以直接安装配置文件里dependencies所有的内容

npm i express -s -D (-D 开发依赖devDependencies，如webpack)

删除
npm uninstall express

指定版本
npm i express@3.0.0

更新版本
npm undate express

全局安装
npm i webpack -g
生产环境的包不建议全局，可能会出现版本冲突

npm login

npm publish

*/

const express = require("express");

