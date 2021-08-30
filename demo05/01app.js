const fs = require('fs')
var path  = './upload'

//检查有没有upload目录

fs.stat(path, (err, data) =>{
    if (err) {
        mkdir(path)
        return;
    }
    if (!data.isDirectory()) {
        //如果存在非目录的同名文件，则先删除文件再创建目录
        fs.unlink(path, (err) => {
            if (!err) {
                mkdir(path)
            } else {
                console.log('请检查输入的数据是否正确')
            }
        })
    }
})

// console.log(`upload目录是否有：${ isHave}`)

function mkdir(dir) {
    fs.mkdir(dir,(err) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('创建upload目录成功');
    })
}
