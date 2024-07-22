const { error } = require('console');
const fs=require('fs');
const http =require('http');


const server=http.createServer();

server.on('request',(req,res)=>{

    // 1st and simple way
// fs.readFile('input.txt',(err,data)=>{
// if(err){
//     return console.log(err);
// }
// res.end(data.toString());
// })

// 2nd ways

const rstream=fs.createReadStream('input.txt');
rstream.on('data',(chunkData)=>{
    res.write(chunkData)
    
});

rstream.on('end',()=>{
    res.end()
})
rstream.on('error',(error)=>{
    console.log(error);
    res.end('file not found')
})

})



server.listen(8000,'127.0.0.1');