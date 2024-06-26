//class name always start from the capital letters
//creating of the class
const EventEmitter= require('events');

//creating a object from the class
const event =new EventEmitter();


// creating multiple event with same name
event.on('SayMyName',()=>{
    console.log("my name is ntitin");
})
event.on('SayMyName',()=>{
    console.log("my name is vinay");
})
event.on('SayMyName',()=>{
    console.log("my name is nikhil");
})

// calling the event
event.emit('SayMyName');


// passing the paramater to the events
event.on('CheckStatusCode',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ok ${msg}`);

})

// calling the event with passing the parameters
event.emit('CheckStatusCode',200,"ok");




