const express=require('express')
const app=express();
let port=5000;

const sendMail=require('./Controllers/sendMail')

app.get('/',(req,res)=>{
    res.send('im a server')
})

//get mtlb hai ki ye url mai bhjna hai
app.get('/sendemail',sendMail)

const start = async ()=>{
try {
    app.listen(port,()=>{
        console.log(`im live in port no ${port}`);
    })
} catch (error) {
    
}
}

start()