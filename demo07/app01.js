const http = require('http');
const fs = require('fs')

http.createServer(function (req, res) {

    //1、获取地址

    console.log(req.url);
    let pathname = req.url;
    pathname = pathname == '/'?'/index.html':pathname

    //2、通过fs模块读取文件

    if (pathname != '/favicon.ico') {
        fs.readFile('./static' + pathname, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
                res.end('404,这个页面不存在');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' });
            res.end(data);
        })
    }



}).listen(3003);

console.log('Server running at http://127.0.0.1:3003/');
