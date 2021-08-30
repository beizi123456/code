const http = require('http');
const fs = require('fs')
const path = require('path')
const url = require('url')
const mime = require('mime')

http.createServer(function (req, res) {
    // routes.static(req,res,'static')

    //1、获取地址
    let pathname = url.parse(req.url).pathname;

    pathname = pathname == '/' ? '/index.html' : pathname
    //可以获取后缀名path.extname()
    let extname = path.extname(pathname)


    //2、通过fs模块读取文件


    if (pathname != '/favicon.ico') {
        fs.readFile('./static' + pathname, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
                res.end('404,这个页面不存在');
                return;
            }
            let mine = mime.getType(extname);
            res.writeHead(200, { 'Content-Type': `${mine};charset="utf-8"` });
            res.end(data);
        })
    }



}).listen(3003);

console.log('Server running at http://127.0.0.1:3003/');
