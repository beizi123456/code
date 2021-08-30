"use strict";

var http = require('http');

var app = require('./route.js');

var ejs = require('ejs'); //注册web服务


http.createServer(app).listen(3009);
app["static"]('public');
console.log('server running at http://127.0.0.1:3009/'); //配置路由

app.get('/', function (req, res) {
  res.send('首页');
});
app.get('/login', function (req, res) {
  ejs.renderFile('./views/form.ejs', {}, function (err, data) {
    res.send(data);
  });
});
app.post('/doLogin', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});