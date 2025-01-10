console.log("Hello Everyone");

// let myAge = 20;
// var myNumber = 30;
// const testNumber = 54;

// console.log(testNumber);
// let myName = "Samuel";
// console.log(myName);
// let isAdmin = false;

// let age;
// console.log(age);
// let data = null;

// let myNewName = "Sammy Sam John";
// console.log(myNewName);
// myNewName = "John John Sammmmmy";
// console.log(myNewName);

// const myNewName = "Sammy Sammy";
// myNewName = "Jouh John";

// console.log(myNewName);

//Arithemetic Operator

// let a = 78;
// let b = 54;
// let add = a + b;
// let subtract = a - b;
// let divide = a / b;
// let mutiply = a * b;
// let modulous = a % b;

// console.log(add);
// console.log(subtract);
// console.log(divide);
// console.log(mutiply);
// console.log(modulous);

// Assignment Operator

// let x = 10;
// x += 5;
// console.log(x);

// y = 20;
// y -= 10;
// console.log(y);

// comparism Operator
// let a = 56;
// let b = 37;
// let c = 82;
// let d = 37;
// let e = "37";

// console.log(a == b);
// console.log(b == d);
// console.log(d == e);
// console.log(d === e);
// console.log(a > b);
// console.log(a < c);
// console.log(a >= b);

// Logical Operator

// const idCard = false;
// const uniform = false;
// const schFee = false;

// console.log(idCard && uniform && schFee);
// console.log(idCard || uniform || schFee);

// Unary Operator

// let a = 20;
// a++;
// console.log(a);

// let b = 30;
// b--;
// console.log(b);

// Tunary Opeators

// Syntax
//condiition ? True : False
// let age = 13;
// let check = age >= 18 ? "This is an Adult" : "Not An Adult";

// console.log(check);

//Conditional Statements

// If statement
//Syntax
// if(condition){
//     what should happen when the condition is true
// }

// const username = "sam";

// if (username === "admin") {
//   console.log("Welcome Admin");
// }

// If else statement
// Syntax
// if(condition){
//     what should happen when the condition is true
// } else{
//     what should happen if the condition is not true
// }

// const userAge = 15;

// if (userAge > 18) {
//   console.log("This user is liable to vote");
// } else {
//   console.log("This user is underage");
// }

// If else if statement
// Syntax
// if(condition){
//     what should happen when the condition is true
// } else if(condition){
//     what should happen if the first condition is not met
// } else if(condition){
//     what should happen if the second condition is not met
// }else{
// What should happen if all the condition is not emt
// }

// const userAge = 27;

// if (userAge < 12) {
//   console.log("Your are withine the child age bracket");
// } else if (userAge > 12 && userAge < 19) {
//   console.log("You are a teenager");
// } else if (userAge > 19 && userAge < 28) {
//   console.log("You are a youth");
// } else {
//   console.log("You are an Adult");
// }

// Classwork
//Write a program that tells the user the hightst of two numbers

// const numOne = 78;
// const numTwo = 45;

// if (numOne > numTwo) {
//   console.log("The first number is the greaest");
// } else console.log("The second Number is the Greatest");

// if (15 > 6) {
//   console.log("This is True");
// }

// if (20 < 30) {
//   console.log("This is True");
// } else {
//   console.log("This is Not True");
// }

// const score = 55;

// if (score === 50) {
//   console.log("You got C");
// } else if (score === 60) {
//   console.log("You got B");
// } else if (score === 70) {
//   console.log("Great!, You got A");
// } else {
//   console.log("Your score is being prossed");
// }

//Functions in Javascript

// function functionName (){
//   return any value
// }

// function userName() {
//   return "Steve Jobs";
// }
// console.log(userName());

// Write a simple function that accepts the name of different users

// function user_name(myName) {
//   return "My name is " + myName;
// }
// console.log(
//   user_name("Jacob"),
//   user_name("Samuel"),
//   user_name("Anisha"),
//   user_name(3500)
// );

//Write a simple function that give the addition of two numbers

// function numAdd(num1, num2, num3) {
//   return num1 + num2 - num3;
// }

// console.log(numAdd(49, 56, 73), numAdd(34, 64, 34), numAdd(427, 364, 98));

// function sayHello() {
//   alert("Hey There, You Just clicked me");
// }

// function highlightText() {
//   document.body.style.backgroundColor = "red";
// }

// Arrays in Javascript

// const myFruits = [
//   "Mango",
//   "Pawpaw",
//   "Apple",
//   "PineApple",
//   "Orange",
//   4526,
//   45673,
// ];

// myFruits[2] = "Grape";
// myFruits[5] = "Watermellon";
// myFruits[6] = "Cherry";

// myFruits.push("Carrots");
// myFruits.push("Guava");
// myFruits.pop();

// myFruits.unshift("Banana");
// myFruits.unshift("Coconut");
// myFruits.shift();

// console.log(myFruits);

// let subFruit = myFruits.slice(3, 6);
// console.log(subFruit);

//Loops in javascriprt

// For Loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let j = 1; j <= 1000; j++) {
//   console.log(j);
// }

// let num = 1;
// while (num <= 100) {
//   console.log(num);
//   num++;
// }

// let g = 0;
// do {
//   console.log(g);
//   g++;
// } while (g < 20);

//Write a loop that prints out all odd numbers between 1-100

// for (let numm = 12; numm <= 100; numm++) {
//   if (numm % 2 !== 0) {
//     console.log(numm);
//   }
// }

//Write a loop that prints out the 2 times multiplication table from 2x1 to 2x20

for (let z = 1; z <= 20; z++) {
  console.log("2 x " + z + " = " + z * 2);
}

// Write a loop that prints out the only the even numbers of the 2times multiplication table from 2 to 60 e.g 2x2=4, 2x4=8, 2x6=12