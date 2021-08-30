var url = require('url')

var api = 'http://www.itying.com?name=xiaoma&age=3';

var getValue = url.parse(api,true).query

console.log(getValue)

console.log(`姓名：${getValue.name}---- ----年龄：${getValue.age}`)
