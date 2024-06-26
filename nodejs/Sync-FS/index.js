const fs=require('fs')
// TO CREATE A FOLDER
// fs.mkdirSync('thapa technical')


// TO WRITE TEXT INTO THE FOLDER
// fs.writeFileSync ('bio.txt','My name is Nitin')


// TO ADD NEW DATA TO THE FILE 
// fs.appendFileSync('bio.txt','please turn on')

// TO READ THE FILE AND CONVERT TO THE STRING 
// const read=fs.readFileSync('bio.txt').toString();
// console.log(read);
// fs.renameSync('bio.txt','hello.txt')


// READ THE FILE AND REMVOE THE BUFFER
// const read=fs.readFileSync('bio.txt','utf8');



// TO REMOVE THE FILE 
// fs.unlinkSync('hello.txt')


// TO REMOVE THE FOLDER 
fs.rmdirSync('Thapa technical')
