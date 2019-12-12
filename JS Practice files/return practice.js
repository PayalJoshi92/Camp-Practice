function function1(a){
      
        return function sum(b){
        var answer=a+b;
        console.log(answer);
    }
}
var add=function1(6);
add(10);
add(21);

