function Trip(){
var people=Number(prompt("How many people are going?"));
var weather=prompt("How is the weather today?");

function NoofPeople(){
    if(people<=2){
console.log("You can take a bike");
}
else if(people>2 && people<=5)
{
console.log("You can take a car");
}
else
{
console.log("You should take a bus");
}
};

function weathertype(){
    if(weather=="rainy"){
console.log("Go for a movie");
}
else if(weather=="sunny")
{
console.log("Go for a picnic");
}
else
{
console.log("Have some beer and chill");
}
};
NoofPeople();
weathertype();
};

Trip();