const fs = require('fs')


 //1、fs.stat

// fs.stat('./html', (err,data) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(`是文件：${data.isFile()}`)
//     console.log(`是目录：${data.isDirectory()}`)
// })

// fs.stat('./package.json', (err,data) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(`是文件：${data.isFile()}`)
//     console.log(`是目录：${data.isDirectory()}`)
// })

//2、fs.mkdir 创建目录
/**mkdir参数：
 * path 将要创建的目录路径
 * mode 目录权限，默认777（一般不用写）
 * callback 回调，传递异步参数err
*/
// fs.mkdir('./css', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('创建成功')
// })

//3、fs.writeFile 创建写入文件

/**
 * fileName (String) 文件名称
 * data (String | Buffer) 将要写入的内容，可以使用字符串或Buffer数据
 * option (Object) :数据、权限
 * callback {Function} 回调，传递一个异常参数err
*/

// fs.writeFile('./html/index.html', '你好，nodejs', (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('创建写入文件成功')
// })

// fs.writeFile('./html/index.html', '你好，nodejs hahahha', (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('创建写入文件成功')
// })

//4、fs.appendFile 追加文件

// fs.appendFile('./css/base.css', 'body{color:red}', (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('appendFile 成功')
// })

// fs.appendFile('./css/base.css', ' h2{color:red}\n', (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('appendFile 成功')
// })

//5、fs.readFile 读取文件

// fs.readFile('./html/index.html', (err,data) => {
//         if (err) {
//             console.log(err)
//             return;
//         }
//     console.log(data)
//     console.log(data.toString())
// })

//6、fs.readdir 读取目录

// fs.readdir('./html', (err, data) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(data)
// })

//7、fs.rename 重命名
/** rename有两个功能
 * 1、表示重命名
 * 2、移动文件
*/

// fs.rename('./css/aa.css', './css/index.css', (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('重命名成功')
// })

// fs.rename('./css/index.css', './html/index.css', (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('移动成功')
// })

//8、fs.rmdir 删除目录
// fs.rmdir('./aaaa', (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('目录删除成功')
// })

//9、fs.unlink  删除文件

// fs.unlink('./aaaa/index.html', (err) => {
//         if (err) {
//             console.log(err)
//             return;
//         }
//         console.log('文件删除成功')

// })
