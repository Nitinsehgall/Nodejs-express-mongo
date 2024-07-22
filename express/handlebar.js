const path =require('path');
const express=require('express');
const app=express();
const port =8000;

const pathname=path.join(__dirname,'../express/Template')
console.log(pathname);
app.set('view engine','hbs');
app.set('views',pathname)
//ye index.hbs wale file dhundega view folder k ander
app.get('',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

