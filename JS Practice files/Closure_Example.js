function outer(){
    var name="Variable";
    function inner(){
        console.log(name);
    }
    inner();
}
Outer();


function outer2(){
    var name="Variable2";
    function inner2(){
        console.log(name);
    }
    return inner2();
}
var newFn=Outer();
newFn();
