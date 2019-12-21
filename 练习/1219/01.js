const express=require('express')


const app =express();


//创建服务器

app.listen(3002,()=>{
    console.log('server is running at http://127.0.0.1:3002');
})


app.get('/index',(req,res)=>{
   res.render('index',{})
})