const profile={
    name:'Nitin',
    class:'Mca',
    rollNumber:20232015,
}


let convertToJson=JSON.stringify(profile)
// console.log(convertToJson);

let fs =require('fs');

// fs.writeFileSync('Practice.json',convertToJson)

let read=fs.readFileSync('./Practice.json','UTF8')
console.log(read);
