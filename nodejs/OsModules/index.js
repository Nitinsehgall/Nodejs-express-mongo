//this file is required to get the modules
const os=require('os');

// /tell about the free ram space
let o=os.freemem();

console.log(`This is the ram ${o/1024/1024/1024}`);  


//tell about the total ram in the system 
let totalMemory=os.totalmem();
console.log(`Total memory is ${totalMemory/1024/1024/1024}`);  

// setInterval(()=>{
// },1000)
    

// var a= function (){
//     console.log("hello world");
// }

// a()



// let hn=os.hostname()
// console.log(hn);
// console.log(os.platform());