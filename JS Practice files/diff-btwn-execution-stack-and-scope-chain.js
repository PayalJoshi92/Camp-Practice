var a='Hello!';
first();
function first(){
    var b='Hii!';
    second();
    function second(){
        var c='Hey!!';
        third();
}
}

function third(){
    var d='John';
    console.log(c);
    console.log(a+d);
}