

let name = prompt("What is your name?");
alert(`Hello ${name}! Welcome to the JavaScript course.`);
let age = prompt("How old are you?");
alert(`You are ${age} years old.`);
let email = prompt("What is your email?");
alert(`Your email is ${email}.`);
if (age <= 12) {
    alert(` hello ${name}, you are too young to register! sorry😢`);}
 else if (age > 12 && age < 18) {
    alert(`hello ${name}, you are eligible to register but you need parental consent!`);}
 else {
    alert(`hello ${name}, you are eligible to register!`);} 
    

