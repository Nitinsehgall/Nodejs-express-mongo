const http=require('http')
const server=http.createServer();

server.on('request',(req,res)=>{

const rStream=fs.createReadStream('example.txt')

rStream.pipe(res)

})




server.listen(8000,'127.0.0.1');