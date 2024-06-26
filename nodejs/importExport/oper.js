function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b;
}


// we can create this way 
// module.exports.add=add;
// module.exports.sub=sub;

        // or
// we can create this way also

module.exports={add,sub};