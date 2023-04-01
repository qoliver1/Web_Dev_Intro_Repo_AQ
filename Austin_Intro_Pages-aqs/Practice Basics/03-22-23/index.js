//Creates a constant variable called button, which is then found by its id of testButton that is in the html document
const austinsButtonjs = document.querySelector("#testButton");
const secondButtonjs = document.querySelector("#secondButton5");
const bodyjs = document.body;
let bodybgcolor = document.body.style.backgroundColor;
let message="You won a million 3 dollars!";
let x= 4;
console.log(bodybgcolor);
//onclick is an event trigger, when the event triggers in this case it calls the function that send an alert, can see console with f12 key
//TODO: Change the text of the button to say "Quincy pressed the button! on the alert, and "I can see the console" in the console view"
austinsButtonjs.onclick = function () {testFunction()};
//secondButtonjs.onmouseenter = quincysFunction;

//const warrenjs = document.querySelector("#warren");
//warrenjs.onmouseenter = quincysFunction;
document.querySelector("#warren").onclick = buttonFunction;
document.querySelector("colorChanger5").onclick = changeColor;


function testFunction () {
    console.log("This is in the console");
    alert(typeof x);
}
function quincysFunction () {
   // console.log("Hey, Quincy's Function was Called!");
   document.querySelector("h2").style.color="green";   
}
function buttonFunction () {
    document.querySelector("h1").innerHTML="Welcome to Our Page!";
}
function changeColor () {
    if(bodyjs.style.backgroundColor =="light blue") {
        console.log("changing to red");
        bodybgcolor = "red";
    }
    else {
        console.log("changing to blue");
        bodybgcolor = "light blue";
    }

}
//TODO: DIFFICULTY INCREASE!
//Do you think there is a way that when the button is pressed that it changes the text of your h1/h2 element?
//Can you add another button so that it has an id of your choosing that when it is pressed, will do the same thing as the button I made