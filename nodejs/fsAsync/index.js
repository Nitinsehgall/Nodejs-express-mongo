// Async way is used for a message whenever the specific task is completed
const fs =require('fs');


// fs.writeFile('read.txt' ,'my name is nitin ',(err)=>{
//     console.log("completed");
//     console.log(err);
// });

//Data add krna ho to file mai asny way se
// fs.appendFile('read.txt','please like and share my channel',(err)=>{
//     console.log("task complete");
// })


//Read the file in asyncronous manner
const read=fs.readFile('read.txt','Utf8',(err,data)=>{
    console.log(data);

});
