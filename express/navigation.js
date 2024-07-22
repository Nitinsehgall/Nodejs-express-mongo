const express=require('express');
const app=express();
const port =8000;

app.get('/',(request,response)=>{
    response.send("</h1>Welcome to my home page </h1>")
   response.send()
})


app.get('/about',(request,response)=>{
    response.write('<h1>Welcome to about page <h1>');
    response.write('<h1>Welcome to about page <h1>');
})
//automatic conversion of object to JSON Data

//1st method of object or array to JSOn converion-simple pass the object in the send
app.get('/object',(request,response)=>{
    response.send(
        {
            name:'nitin',
            id:23,
        }
    );
})
//2nd method of json conversion -it will convert also those values which are not in JSON format
app.get('/object',(request,response)=>{
    response.send(
        {
            name:'nitin',
            id:23,
        }
    );
})
app.get('/contact',(request,response)=>{
    response.send('Welcome to contact page ');
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

