const http = require('http');
const path = require('path');
const url = require('url');
const routes = require('./routes.js');


http.createServer(function (req, res) {
    //创建静态web服务
    let pathname = url.parse(req.url).pathname;
    let extname = path.extname(pathname);
    routes.static(req,res,'static');
    if(!extname){ //如果有请求地址有后缀名的话让静态web服务去处理
        if(pathname=='/login'){
            res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end("执行登录");
        }else if(pathname=='/register'){
            res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end("执行注册");
        }else if(pathname=='/admin'){
            res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end("处理后的业务逻辑");
        }else if(pathname=='/admin'){
            res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end("404");
        }
    }


}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
