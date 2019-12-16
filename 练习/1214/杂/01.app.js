const http =require('http')

const app =http.createServer()

app.listen(3000,()=>{
    Console.log();
})

app.on('request',(req,res)=>{
    let method =req.method;
    let url =req.url;

    if(method == 'GET' &&(url =='./' ||url=='.favicon.ico' )){
        res.end('404')
    }
})