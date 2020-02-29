function counter(initValue){
    var currentValue=initValue;
    var increment=function(step){
        currentValue+=step;
        console.log('currentValue=' + currentValue);
    };

    return increment;
}

var incrementCounter=counter(0);
incrementCounter(1);
incrementCounter(2);
incrementCounter(3);