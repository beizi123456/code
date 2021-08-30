var http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html;charset=UTF-8' })
    res.write('坚持就是✌️胜利');
    res.end();//结束响应
}).listen(3002);

console.log('Server running at http://127.0.0.1:3002/');
