

// 连接数据库以及监听端口  启动后台服务以及配置相关中间件

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// 链接本地数据库
var db = mongoose.connect('mongodb://localhost:27017/myDbs-demo');
// myDbs-demo是数据库的名字

// 请求express路由的地址
const hero = require('./router/hero');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',hero);  //地址中增加一个"/api"


app.listen(3017,() => {
  console.log('app listening on port 3017.');
});
