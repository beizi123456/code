const fs = require('fs')

/*创建读取流*/

// var readStream = fs.createReadStream('./data/input.txt')

// var count = 0;
// var str = '';
// readStream.on('data', (data) => {
//     str += data;
//     count++;
// })

// readStream.on('end', () => {
//     console.log(str);
//     console.log(count);
// })

// readStream.on('error', (err) => {
//     console.log(err);
// })

/*创建写入流*/

// var str = '';
// for (var i = 0; i < 6000; i++) {
//     str += '我是从数据库获取的数据，我要保存起来1212121212121211\n';
// }

// var writeStream = fs.createWriteStream('./data/input.txt')

// writeStream.write(str);

// //标记写入完成:注意只有写过标记后才可以触发下面的on监听的finish
// writeStream.end()

// writeStream.on('finish', () => {
//     console.log('写入完成');
// })

/*管道流*/

    var readStream = fs.createReadStream('./ceshi.dmg');
    var writeStream = fs.createWriteStream('./data/ceshi.dmg');

readStream.pipe(writeStream);
