function one(a){

   return function two(b){

        return function three(c){

            var sum=a+b+c;
            return sum;
        }
    }
}
var parent = one(10);
var child=parent(20);
var grandchild= child(30);
console.log(grandchild);
 