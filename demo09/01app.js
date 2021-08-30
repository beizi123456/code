const http = require('http');
const path = require('path');
const url = require('url');
const ejs = require('ejs')
const routes = require('./routes.js');



http.createServer(function (req, res) {
    //创建静态web服务
    let pathname = url.parse(req.url).pathname;
    let extname = path.extname(pathname);
    routes.static(req,res,'static');
    if(!extname){ //如果有请求地址有后缀名的话让静态web服务去处理
        if (pathname == '/login') {
            //模拟数据库中的数据
            let msg = '模拟数据库数据'
            let list = [
                {
                    title: '新闻标题',
                    content:'这是一则新闻111',
                },
                {
                    title: '新闻标题',
                    content:'这是一则新闻222',
                },
                {
                    title: '新闻标题',
                    content:'这是一则新闻333',
                },
                {
                    title: '新闻标题',
                    content:'这是一则新闻444',
                },
            ]
            ejs.renderFile('./views/login.ejs', {
                msg: msg,
                list:list
            }, (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
                res.end(data)
            })
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
