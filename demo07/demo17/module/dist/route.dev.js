"use strict";

var fs = require('fs');

var path = require('path');

var url = require('url'); //扩展res


function changeRes(res) {
  res.send = function (data) {
    res.writeHead(200, {
      'Content-Type': 'text/html;charset="utf-8"'
    });
    res.end(data);
  };
} //根据后缀名获取文件类型


function getFileMime(extname) {
  var data = fs.readFileSync('./data/mime.json'); //同步方法

  var mimeObj = JSON.parse(data.toString());
  return mimeObj[extname];
} //静态web服务的方法


function initStatic(req, res, staticPath) {
  //1、获取地址
  var pathname = url.parse(req.url).pathname; // pathname = pathname == '/' ? '/index.html' : pathname;

  try {
    var data = fs.readFileSync('./' + staticPath + pathname);

    if (data) {
      var mime = getFileMime(pathname);
      res.writeHead(200, {
        'Content-Type': '' + mime + ';charset="utf-8"'
      });
      res.end(data);
    }
  } catch (error) {
    console.log(error);
  }
}

var server = function server() {
  var G = {
    _get: {},
    _post: {},
    staticPath: 'static' //，默认静态web目录

  };

  var app = function app(req, res) {
    //扩展res的方法
    changeRes(res); //配置静态web服务

    initStatic(req, res, G.staticPath);
    var pathname = url.parse(req.url).pathname; //获取请求类型

    var method = req.method.toLowerCase();
    console.log(method);
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
          'Content-Type': 'text/html;charset="utf-8"'
        });
        res.end('页面不存在');
      }
    }
  }; //get请求


  app.get = function (str, cb) {
    //注册方法
    G._get[str] = cb;
  }; //post请求


  app.post = function (str, cb) {
    //注册方法
    G._post[str] = cb;
  }; //配置静态web服务目录


  app["static"] = function (staticPath) {
    G.staticPath = staticPath;
  };

  return app;
};

module.exports = server();