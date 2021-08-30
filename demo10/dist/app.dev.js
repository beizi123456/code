"use strict";

var http = require('http');

var path = require('path');

var url = require('url');

var routes = require('./routes.js');

http.createServer(function (req, res) {
  //创建静态web服务
  var pathname = url.parse(req.url).pathname;
  var extname = path.extname(pathname);
  routes["static"](req, res, 'static');

  if (!extname && pathname.replace("/", "")) {
    //如果有请求地址有后缀名的话让静态web服务去处理
    try {
      routes[pathname.replace("/", "")](req, res);
    } catch (error) {
      routes['error'](req, res);
    }
  }
}).listen(3007);
console.log('Server running at http://127.0.0.1:3007/');