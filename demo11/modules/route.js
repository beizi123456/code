const url= require('url')

let G = {} //G 代表global，可自定义名称，一般定义为G

let app = function (req, res) {
    let pathname = url.parse(req.url).pathname
    //调用app方法
    if (G[pathname]) {
        G[pathname](req, res); //执行方法
    } else {
        res.writeHead(404, { 'Content-type': 'text/html;charset="utf-8"' })
        res.end('404,页面不存在～～～')
    }
}

app.get = function (str, cb) {
    //注册方法
    G[str] = cb
    /**
     * G['/login'] = function (req,res){
     *   res.send('hello world')
     * }
    */
}

module.exports = app;
