//第一步： 引入http模块
const http = require('http')


//第二步：创建服务器对象
const app = http.createServer()

//第三步： 监听用户请求的端口号
app.listen(3001,()=>{
    console.log('server is running at http://127.0.0.1:3001');
})

// 第四步：注册一个监听用户的请求的事件
let num = 0;
app.on('request',(req,res)=>{
    res.writeHeader(200,{
        'Content-Type':'text/plain;charset=utf-8'
    })    

    //使用end方法结束请求，返回数据
    num++;
    res.end('来了，老弟儿'+num);
})