const express=require('express');

const app=express()

// app.get(route,callback)
app.get('/',(request,response)=>{
    
    response.send('hello world from the side which is express');

})
app.get('/about',(request,response)=>{
    
    response.send('hello world from the about page');

})

app.listen(8000,()=>{
    console.log("listening to port at 8000");
})

// API 
// GET -READ KRTA HAI 
// POST -CREATE KRTA HAI
// PUT-UPDATE KRTA HAI
// DELETE-DELETE KRTA HAI 

// The callback function has 2 parameters, request(req) and response(res).
// The request object(req) represents the HTTP request and
// has properties for the request quer string, parameters, body,
// HTTP headers, etc.
// Similarly, the response object represents the HTTP response
// that the Express app sends when it receives an HTTP request.
