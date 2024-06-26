const path =require('path');

const express=require('express');
const app=express();
const port =8000;



const staticPath=path.join(__dirname, "../express/public");
console.log(staticPath);

app.use(express.static(staticPath));


// app.use(express.static(staticPath))


app.get('/',(request,response)=>{
    response.send()
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

