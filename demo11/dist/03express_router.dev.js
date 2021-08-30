"use strict";

var http = require('http');

var app = require('./modules/route.js');

http.createServer(app).listen(3009);
console.log('server running at http://127.0.0.1:3009/'); //配置路由

app.get('/', function (req, res) {
  res.writeHead(200, {
    'Content-type': 'text/html;charset="utf-8"'
  });
  res.end('首页');
});
app.get('/login', function (req, res) {
  res.writeHead(200, {
    'Content-type': 'text/html;charset="utf-8"'
  });
  res.end('执行登录操作');
});
app.get('/news', function (req, res) {
  res.writeHead(200, {
    'Content-type': 'text/html;charset="utf-8"'
  });
  res.end('执行新闻界面');
}); // app.get('/error', function (req, res) {
//     res.writeHead(404, { 'Content-type': 'text/html;charset="utf-8"' })
//     res.end('执行登录操作')
// })