const http = require('http')
const tools = require('./module/formatApi.js');


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html;charset="utf-8"'});
    res.write('hello,this is commonJs content<br>');
    var api = tools.formatApi('api/focus');
    res.write(api);
    res.end()
}).listen(3003)
