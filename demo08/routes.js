const fs = require('fs')
const url = require('url')
const path = require('path')
const mime = require('mime')

exports.static = function (req, res, staticPath) {

    //1、获取地址
    let pathname = url.parse(req.url).pathname;
    pathname =  pathname == '/' ? '/index.html' : pathname;
    let extname = path.extname(pathname);

    if (extname) {  //如果有后缀名让静态web处理 否则路由处理
        //2、通过fs模块读取文件
        if (pathname != '/favicon.ico') {
            try {
                let data = fs.readFileSync('./' + staticPath + pathname);
                if (data) {
                    let m = mime.getType(extname);
                    res.writeHead(200, { 'Content-Type': '' + m + ';charset="utf-8"' });
                    res.end(data);
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

}

