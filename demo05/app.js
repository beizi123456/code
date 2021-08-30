
const fs = require('fs')

async function isDir(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, stats) => {
            if (err) {
                console.log(err)
                reject(err)
                return;
            }
            if (stats.isDirectory()) {
                resolve(true);
            } else {
                resolve(false)
            }
        })
    })
}

function main() {
    var path = './wwwroot';
    var dirArr = [];
    fs.readdir(path, async(err, data) => {
        if (err) {
            console.log(err);
            return ;
        }
        for (var i = 0; i < data.length; i++) {
            if (await isDir(path + '/' + data[i])) {
                dirArr.push(data[i])
            }
        }
        console.log(dirArr);
    })
}

main()
