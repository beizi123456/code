const http = require('http');
const path = require('path');
const url = require('url');

const routes = require('./routes.js');



http.createServer(function (req, res) {
    //创建静态web服务
    let pathname = url.parse(req.url).pathname;
    let extname = path.extname(pathname);
    routes.static(req,res,'static');
    if (!extname && pathname.replace("/","")) { //如果有请求地址有后缀名的话让静态web服务去处理
        try {
            routes[pathname.replace("/","")](req, res);
        } catch (error) {
            routes['error'](req, res);
        }
    }
}).listen(3007);

console.log('Server running at http://127.0.0.1:3007/');
