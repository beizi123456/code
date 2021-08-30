const  http = require('http')
const url = require('url')
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html;charset=UTF-8' })
    res.write('hello 23232 node.js')

    console.log(req.url)//获取浏览器访问地址
    if (req.url !== '/favicon.ico') {
        let getValue = url.parse(req.url,true).query
        console.log(`姓名：${getValue.name}---- ----年龄：${getValue.age}`)
    }
    res.end()//响应 结束
}).listen(3002)

console.log('Server running at http://127.0.0.1:3002/');
