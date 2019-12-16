const http =require('http');

//tow
const app =http.createServer();

app.listen(3002,()=>{
    console.log('server is running at http://127.0.0.1:3002')
})

//si
let num = 0 ;
app.on('request',(req,res) =>{
    res.writeHeader(200,{
        'Content-Type':'text/plain;charset=utf-8'
    })
    num++;
    res.end('弟弟'+num);
})
