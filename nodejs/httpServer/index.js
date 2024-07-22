//require the file 
const http=require('http'); 

//creating a server that give response only
const server=http.createServer((request,response)=>{

    if(request.url ==='/'){

        response.end(`hello from other side `);
    }
    else if(request.url ==='/shanu'){
        response.end('hello')
    }
    else{ 
        response.writeHead(404)
        response.end('<h1>url not found</h1>')
    }
})

//creating a port for the url 
// by opening on this port => localhost:8000 on the url of chrome it will give the response which is hello
//it takes three arguments 1) is port 2) is server 3) is callback for the console
server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to the port no 8000');
})