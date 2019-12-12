function one(a){

  function two(b){
    var sum = a+b;
    return sum;

}
return two;
}
var answer=one(10);
console.log(answer(20));


