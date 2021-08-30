"use strict";

var fs = require('fs');

var url = require('url');

var path = require('path');

var mime = require('mime'); //扩展res


function changeRes(res) {
  res.send = function (data) {
    res.writeHead(200, {
      'Content-type': 'text/html;charset="utf-8"'
    });
    res.end(data);
  };
} //静态web服务的方法


function initStatic(req, res, staticPath) {
  //1、获取地址
  var pathname = url.parse(req.url).pathname;

  try {
    fs.readFile('./' + staticPath + pathname, function (err, data) {
      if (data) {
        var m = mime.getType(pathname);
        res.writeHead(200, {
          'Content-Type': '' + m + ';charset="utf-8"'
        });
        res.end(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

var server = function server() {
  var G = {
    //G 代表global，可自定义名称，一般定义为G
    _get: {},
    _post: {},
    staticPath: 'static' //静态目录自定义默认为static

  };

  var app = function app(req, res) {
    //扩展res的方法
    changeRes(res); //配置静态web服务

    initStatic(req, res, G.staticPath);
    var pathname = url.parse(req.url).pathname;
    var method = req.method.toLowerCase(); //调用app方法

    var extname = path.extname(pathname);

    if (!extname) {
      //如果有后缀名用静态web处理
      if (G['_' + method][pathname]) {
        if (method == "get") {
          G['_' + method][pathname](req, res); //执行方法
        } else {
          //post  获取post的数据 把它绑定到req.body
          var postData = '';
          req.on('data', function (chunk) {
            postData += chunk;
          });
          req.on('end', function () {
            req.body = postData;
            G['_' + method][pathname](req, res); //执行方法
          });
        }
      } else {
        res.writeHead(404, {
          'Content-type': 'text/html;charset="utf-8"'
        });
        res.end('404,页面不存在～～～');
      }
    }
  }; //get请求


  app.get = function (str, cb) {
    //注册方法
    G._get[str] = cb;
  }; //post 请求


  app.post = function (str, cb) {
    //注册方法
    G._post[str] = cb;
  }; //静态web服务的目录


  app["static"] = function (staticPath) {
    G.staticPath = staticPath;
  };

  return app;
};

module.exports = server();