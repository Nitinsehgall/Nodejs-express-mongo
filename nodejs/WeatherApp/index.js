const http =require('http');
const fs=require('fs');
var requests=require('requests')
const homeFile=fs.readFileSync('home.html','utf-8')

const replaceVal=(tempVal,orgVal)=>{
    let temperature=tempVal.replace('{%tempVal%}',orgVal.main.temp)
     temperature=temperature.replace('{%tempMin%}',orgVal.main.temp_min)
     temperature=temperature.replace('{%tempMax%}',orgVal.main.temp_max)
     temperature=temperature.replace('{%location%}',orgVal.name)
     temperature=temperature.replace('{%country%}',orgVal.sys.country)
     temperature=temperature.replace('{%tempStatus%}',orgVal.weather[0].main)
  return temperature
}
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Yamunanagar&appid=9f522aa60779df90b025c7db7c3d3862")
        .on('data', (chunk)=> {
            
            const objData=JSON.parse(chunk)
            const arr=[objData]
        //   console.log(arr[0].main.temp)
     const realTimeDAta=   arr.map((val)=>replaceVal(homeFile,val) ).join("")
     res.write(realTimeDAta);
     console.log(realTimeDAta);
        })
        .on('end', (err)=> {
          if (err) return console.log('connection closed due to errors', err);
         
        res.end();
        });

    }
}); 


server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to the port no 8000');
})