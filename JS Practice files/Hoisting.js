xy();
function xy(){
    console.log("Payal");
}

zy();    // this function won't work as it is called before initialization
var zy=function(){
    console.log("Joshi")
}