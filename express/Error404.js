const express =require('express')
const path =require('path')
const app=express()

app.get('/',(req,res)=>{
    res.send('you are on main page')
})

//agr url mai upar wali url mai jo upr dia ha usse alg kuch daloge / k bad to ye dikhaega niche wala 
// accessed with * operator
app.get('*',(req,res)=>{
    res.write('404 Error page not found please try relavant address')
    res.send()
})

app.listen(8000,()=>{
    console.log('sirver listen on the app');
})