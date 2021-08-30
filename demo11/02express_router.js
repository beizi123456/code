let G = {}



let app = function (req,res) {
    //调用app方法
    if (G['/login']) {
        G['/login'](req,res); //执行方法

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

//执行方法
app.get('/login', function (req, res) {
    // res.send('hello world')
    console.log('执行login方法')
})

setTimeout(() => {
    app('req','res')
},1000)
