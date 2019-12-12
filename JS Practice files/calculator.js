function calculator(a,b){

    function addition(c,d){
        return c+d;
    }
var add=addition(a,b);
console.log('Addition is ' +add);

function multiply(e,f){
    return e*f;
}
var mul=multiply(a,b);
console.log('Multiplication is ' +mul);

function subtraction(g,h){
    if (g>h){
        return g-h;
    }
    else{
        return h-g;
    }
}
var sub=subtraction(a,b);
console.log('Subtraction is ' +sub);

function division(i,j){
    if (i>j){
        return i/j;
    }
    else{
        return j/i;
    }
}
var divide=division(a,b);
console.log('Division is ' +divide);



};

O/P:

var x=Number(prompt("Enter first number"));   //50
var y=Number(prompt("Enter second number"));  //5
calculator(x,y);
VM1150:7 Addition is 55
VM1150:13 Multiplication is 250
VM1150:24 Subtraction is 45
VM1150:35 Division is 10