//1.引入模块
const http =require('http');

//2. 创建服务器对象
const fs =require('fs')
const app =http.createServer();

//3. 监听请求的端口
app.listen(3003,()=>{
    console.log('server is running at http://127.0.0.1:3003 ');
})

//4.监听用户的请求

app.on('request',(req,res)=>{
    let method =req.method;
    let url =req.url;
    console.log(method);
    if(method == 'GET'&& (url == '/' || url == '/favicon.ico')){
        res.end('404')
    }
})  