"use strict";

var http = require('http');

var path = require('path');

var url = require('url');

var ejs = require('ejs');

var routes = require('./routes.js');

http.createServer(function (req, res) {
  //创建静态web服务
  var pathname = url.parse(req.url).pathname;
  var extname = path.extname(pathname);
  routes["static"](req, res, 'static');

  if (!extname) {
    //如果有请求地址有后缀名的话让静态web服务去处理
    if (pathname == '/news') {
      //http://127.0.0.1:3000/news?page=2&id=1
      //获取请求类型
      console.log(req.method);
      var query = url.parse(req.url, true).query;
      console.log(query.page);
      res.writeHead(200, {
        'Content-Type': 'text/html;charset="utf-8"'
      });
      res.end('已经执行');
    } else if (pathname == '/login') {
      //post请求
      ejs.renderFile('./views/form.ejs', {}, function (_err, data) {
        res.writeHead(200, {
          'Content-Type': 'text/html;charset="utf-8"'
        });
        res.end(data);
      });
    } else if (pathname == '/doLogin') {
      //获取post传值
      var postData = '';
      req.on('data', function (chunk) {
        postData += chunk;
      });
      req.on('end', function () {
        console.log(postData);
        res.end(postData);
      });
    } else if (pathname == '/admin') {
      res.writeHead(404, {
        'Content-Type': 'text/html;charset="utf-8"'
      });
      res.end("404");
    }
  }
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');