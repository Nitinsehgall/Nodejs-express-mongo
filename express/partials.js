const path =require('path');
const express=require('express');
const app=express();
const port =8000;
const hbs=require('hbs');


// const staticPath=path.join(__dirname, "../express/public");

const pathname=path.join(__dirname,'../express/Template/views')
const partialsPath=path.join(__dirname,'../express/Template/partials')
// app.use(express.static(staticPath));
console.log(partialsPath);
app.set('view engine','hbs');
//views folder ka name change krdo pathname mai jo data h vha se utaega ab ye
app.set('views',pathname)

hbs.registerPartials(partialsPath)

//ye index.hbs wale file dhundega view folder k ander
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})


// '*' mtlb hai ki agar ye page k url mai un k ilava kuch aur dedia user ne to kuch data render krdo  
//ismai error jo likha hai vo page hai partial mai 
app.get('*',(req,res)=>{
    res.render('error',{
        errorHandler:"im an eroor"
    })
    
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

