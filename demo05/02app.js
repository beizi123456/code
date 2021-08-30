/**
 * https://www.npmjs.com/package/mkdirp
*/
// const mkdirp = require('mkdirp')

// mkdirp('./tmp/foo/bar/baz').then(made =>
//  console.log(`made directories, starting with ${made}`)
// )

const fs = require('fs')
var path = './wwwroot'

/**
 * 错误的写法，循环内的异步导致的结果数据为[],fs里的方法是异步
*/
// var dirArr = []
// fs.readdir(path, (err,data) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     // console.log(data)
//     for (var i = 0; i < data.length; i++) {
//         fs.stat(path + '/' + data[i], (err,stats) => {
//             if (!err) {
//                 if (stats.isDirectory) {
//                     dirArr.push(data[i])
//                 }
//             }
//         })
//     }
//     console.log(dirArr)
// })

// console.log(dirArr)

/**
 * 解决1：递归实现
*/
// var dirArr = []
// fs.readdir(path, (err,data) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     // console.log(data)
//     (function getDir(i) {
//         if (i == data.length) { //执行完成
//             console.log(dirArr)
//             return;
//         }
//         fs.stat(path + '/' + data[i], (err,stats) => {
//             if (stats.isDirectory()) {
//                 dirArr.push(data[i])
//             }
//             getDir(i+1)
//         })
//     })(0)
// })



/**
 * 定时器模拟循环中异步回调执行问题
 * 理想中：1、2、3
 * 实际上：3、3、3
*/


// for (var i = 0; i < 3; i++){

//     setTimeout(() => {
//         console.log(i)
//      },100)
// }

/**
 * 解决2：async await
 *
*/
/**以前处理的方式*/

// function getData(callback) {
//     setTimeout(function () {
//         var name = '张Sam';
//         callback(name)
//     }, 1000);
// }

// getData(function (aaa) {
//     console.log(aaa)
// })

/**es6处理的方式*/


// var p = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         var name = 'Zhangsan';
//         resolve(name)
//     },1000)
// })
// p.then((data) => {
//     console.log(data)
// })


// function getData(resolve, reject) {
//         setTimeout(function () {
//             var name = 'Zhangsan';
//             resolve(name)
//         },1000)
// }
// var p = new Promise(getData);

// p.then((data) => {
//     console.log(data)
// })
