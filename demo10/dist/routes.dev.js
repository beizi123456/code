"use strict";

var fs = require('fs');

var url = require('url');

var path = require('path');

var mime = require('mime');

var ejs = require('ejs');

var app = {
  "static": function _static(req, res, staticPath) {
    //1、获取地址
    var pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html' : pathname;
    var extname = path.extname(pathname);

    if (extname) {
      //如果有后缀名让静态web处理 否则路由处理
      //2、通过fs模块读取文件
      if (pathname != '/favicon.ico') {
        try {
          var data = fs.readFileSync('./' + staticPath + pathname);

          if (data) {
            var m = mime.getType(extname);
            res.writeHead(200, {
              'Content-Type': '' + m + ';charset="utf-8"'
            });
            res.end(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
  login: function login(req, res) {
    //http://127.0.0.1:3000/news?page=2&id=1
    //获取请求类型
    console.log(req.method);
    var query = url.parse(req.url, true).query;
    console.log(query.page);
    res.writeHead(200, {
      'Content-Type': 'text/html;charset="utf-8"'
    });
    res.end('已经执行');
  },
  news: function news(req, res) {
    //post请求
    ejs.renderFile('./views/form.ejs', {}, function (_err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html;charset="utf-8"'
      });
      res.end(data);
    });
  },
  doLogin: function doLogin(req, res) {
    //获取post传值
    var postData = '';
    req.on('data', function (chunk) {
      postData += chunk;
    });
    req.on('end', function () {
      console.log(postData);
      res.end(postData);
    });
  },
  error: function error(req, res) {
    res.writeHead(404, {
      'Content-Type': 'text/html;charset="utf-8"'
    });
    res.end("404");
  }
};
/**
 * app.login('req','res')
 * app['login']('req','res')
*/

module.exports = app;