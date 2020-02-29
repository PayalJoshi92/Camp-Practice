var car=function(audi,maruti){
var text=maruti+','+audi;

return function(){
console.log(text);
};
};
var a=car('Q3','Ciaz');
a();
