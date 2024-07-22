const path =require('path');

//gives the directory name as it is

let a=path.dirname('D:/nodejs/pathModule/index.js');

//gives the extension name
path.extname('D:/nodejs/pathModule/index.js');


let b=path.parse('D:/nodejs/pathModule/index.js');
// console.log(a);
console.log(b);

