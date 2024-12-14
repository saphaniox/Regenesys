// alert("This is the script file");

// console.log("This is for the console");

// let a = 56789;
// let b = 23273712;
// console.log(a);
// console.log(b);

// let myName = "Trump";
// console.log(myName);

// let myNum = 23;
// console.log(myNum);
// let myTestName = "Sammy";
// console.log(myTestName);
// let isStudent = true;
// console.log(isStudent);
// let test;
// console.log(test);
// let myTest = null;
// console.log(myTest);

//Console

// console.error("This is a 404 error");
// console.warn("Enter your password correctly");
// console.info("Password have to contain an uppercase and numbers");
// console.log("This is just a cool class test");

//Premitive Data Types

// let myNumber = "200";
// console.log(myNumber);
// let myName = "sammy";
// console.log(myName);
// let isStudent = true;
// console.log(isStudent);
// let myNewName;
// console.log(myNewName);
// let allUsers = null;
// console.log(allUsers);

// Operators in Javascript

//Arithemetic Operator
// let a = 1938;
// let b = 934;
// let add = a + b;
// let sub = a - b;
// let devision = a / b;
// let mult = a * b;
// let modul = a % b;

// console.log("The value of A and B is:", add);
// console.log(sub);
// console.log(devision);
// console.log(mult);
// console.log(modul);

// Assignment Operator

// let x = 10;
// console.log(x);
// x += 5;
// console.log(x);
// x -= 5;
// console.log(x);

// Comparizm operatpors

// == (Equals to)
// != (Not Equals to)
// === (Strictly Equals to)
// > (Greater Than)
// < (Less Than)
// >= (Greater Than Equals to)
// <= (Less than Equals to)

// let a = 34;
// let b = 27;
// let c = 34;
// let d = "34";

// console.log(a == b);
// console.log(a == c);
// console.log(a != b);
// console.log(a != c);
// console.log(a == d);
// console.log(a === d);
// console.log(a > b);
// console.log(a >= c);
// console.log(a <= c);
// console.log(a < b);

// Logical Operators
// && (and) This show true only is all it's conditions are true
// || (or) This shows true if one of the conditions is true
// ! (not) This trows the opposite

// const isAdmin = true;
// const isLoggedIn = true;
// const isTested = true;

// console.log("And Operator", isAdmin && isLoggedIn && isTested);
// console.log("Or Operator", isAdmin || isLoggedIn || isTested);
// console.log("Not Operator", !isAdmin);

// Unary Operators

// let a = 0;
// ++a;
// console.log(a);
// ++a;
// console.log(a);
// --a;
// console.log(a);

// let b = false;
// console.log(!b);

// Tunary Operator

// Write a Javascript program that tells the age of studets that will be able to take immunization (Only age 1 to 9)

// let age = 10;
// let statusCheck =
//   age > 0 && age < 10
//     ? " Go on to take this medication"
//     : "You cannot take this medication";

// console.log(statusCheck);

// Write a javascript program to tell if a user is liable to vote
// const userAge = 18;

// const checkAge =
//   userAge >= 18
//      ? "You are liable to vote"
//      : "You are not up to that age";
// console.log(checkAge);

// const userAge = 16;

// const checkAge =
//   userAge >= 18 || userAge === 15
// ? "You are liable to vote"
//     : "You are not up to that age";
// console.log(checkAge);

// Class Work
// Write a Javascript program to tell the greatest of two numbers
// const numOne = 523;
// const numTwo = 242;

// const checkNum =
//   numOne > numTwo
//     ? `${numOne} is the Greater than ${numTwo}`
//     : `${numTwo} is the Greater than ${numOne}`;

// console.log(checkNum);

//Alert and Props

// const myName = prompt("What is your name");
// console.log(myName);
// alert("The user name is" + myName);

//Concatination => Adding two strings together
// console.log("Sam is a " + "Boy");
// console.log("20" + 20);

// Type conversion

// let myTest = "20";
// console.log(typeof myTest, myTest);
// myTest = parseInt(myTest);
// console.log(typeof myTest, myTest);
// myTest = myTest.toString();
// console.log(typeof myTest, myTest);

//Conditionsls in Javascript
//If Conditions

// if (33 > 54) {
//   console.log("The first value is the greates");
// }

// if-else

// if (33 > 56) {
//   console.log("The if condition has been met");
// } else {
//   console.log("The else condition has been met");
// }

// if-elseif

// const userAge = 41;

// if (userAge === 20) {
//   console.log("You are 20 years old and can join");
// } else if (userAge === 30) {
//   console.log("You are 30 years old and can join");
// } else if (userAge === 40) {
//   console.log("You are 40 years olda and can join");
// } else {
//   console.log("You are not withine the age bracket");
// }

// Questions On Conditional statenment (If Else and Else If)

// 1. Write a program that determines whether a given number is positive or negative.

// const userNumber = parseInt(prompt("Enter your Number"));
// console.log(typeof userNumber, userNumber);
// if (userNumber > 0) {
//   alert(`${userNumber} is a positive Number`);
// } else {
//   alert(`${userNumber} is a Negative Number`);
// }

// 2. Write a program to determine the greater of two numbers

// const userNumOne = parseInt(prompt("Enter your first Number"));
// const userNumTwo = parseInt(prompt("Enter your Second Number"));

// if (userNumOne > userNumTwo) {
//   alert(`${userNumOne} is the greatest Number`);
// } else {
//   alert(`${userNumTwo} is the greatest Number`);
// }

// 3. Write a program that checks if a number is even or odd.

// const userNumber = parseInt(prompt("Enter any Number"));
// if (userNumber % 2 === 0) {
//   alert(`${userNumber} is An Even Number`);
// } else {
//   alert(`${userNumber} is an Odd number`);
// }

// 4. Write a javascript program that prints the highest of three numbers

// const userNumOne = parseInt(prompt("Enter your first Number"));
// const userNumTwo = parseInt(prompt("Enter your second Number"));
// const userNumThree = parseInt(prompt("Enter your third Number"));

// if (userNumOne > userNumTwo && userNumThree) {
//   alert(`${userNumOne} is the greatest number`);
// } else if (userNumTwo > userNumThree && userNumOne) {
//   alert(`${userNumTwo} is the greatest number`);
// } else if (userNumThree > userNumOne && userNumTwo) {
//   alert(`${userNumThree} is the greatest number`);
// } else {
//   alert("Enter a valid number");
// }

// 5. Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// 6. Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// const userPrice = parseInt(prompt("Enter your Purchase Price"));

// if (userPrice >= 100) {
//   alert("You have a 20% discount");
// } else if (userPrice >= 50) {
//   alert("You have a 10% discount");
// } else {
//   alert("You have a 0% discount");
// }

// 7. Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height).

//Functions In Javascript

// Function Declearation
// function myName() {
//   console.log("I am inside a function");
// }

// Invoking My Function
// myName();

//Create a function to Print out Users Name
// function userName(name) {
//   console.log("My name is " + name);
// }

// userName("John");
// userName("James");
// userName("Andew");
// userName("Siemon");

// Write a function that accepts Users name and age
// function my_user_name_age(name, age) {
//   console.log(`This is ${name} and he is ${age} years old`);
// }

// my_user_name_age("John", 23);

//Write a simple function that adds two numbers
// function add() {} //Default Function
// const myAdd = () => {}; //Named Function

// function two_num_add_01(a, b) {
//   console.log(a + b);
// }
// two_num_add_01(23, 54);
// two_num_add_01(2453, 539473);

// const two_num_add_02 = (a, b) => {
//   console.log(a + b);
// };

// two_num_add_02(343, 622);

// const a = 34;
// const b = 43;
// console.log(a + b);

// const c = 25;
// const d = 57;
// console.log(c + d);

// const e = 53;
// const f = 11;
// console.log(e + f);

// const addition = (a, b) => {
//   console.log(a + b);
// };

// addition(34, 43);
// addition(25, 57);
// addition(53, 11);

// Write a function that prints the highest of two numbers

// const myHighestNum = (num1, num2) => {
//   if (num1 > num2) {
//     console.log(`${num1} is the greatest`);
//   } else {
//     console.log(`${num2} is the greatest`);
//   }
// };

// myHighestNum(34, 67);
// myHighestNum(52, 56);
// myHighestNum(87, 41);

//Events Handlers
// function sayHello() {
//   alert("This is hello from Javascript");
// }

// function highlightText() {
//   document.body.style.backgroundColor = "lightblue";
// }

//Arrays in Javascript
// const myArray = [];
// const myNumbers = [32, 44, 782, 52];
// const myFruitArray = ["Mango", "Pawpaw", "Orange", "Cherry", "Grape"];
// myFruitArray[0] = "Banana";
// myFruitArray[2] = "Guava";

// //Push and Pop

// console.log(myFruitArray);
// console.log(myFruitArray[3]);
// myFruitArray.push("Watermelon");
// myFruitArray.push("Pineapple");
// console.log(myFruitArray);
// myFruitArray.pop();
// console.log(myFruitArray);

// //Shift and Unshift
// myFruitArray.shift();
// console.log(myFruitArray);
// myFruitArray.unshift("Pear");
// console.log(myFruitArray);

// //Slice and Splice
// const newFruit = myFruitArray.slice(1, 4);
// console.log(newFruit);

// myFruitArray.splice(2, 1, "Tangarine");
// console.log(myFruitArray);

// console.log(myFruitArray.length);

//Loops
//Write a loop that prints out the numbers from 1 - 10
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//Write a while loop that prints out values from 1 - 100
// let j = 1;
// while (j <= 1000) {
//   console.log(j);
//   j++;
// }

//Write a Do While loop to print numbers from 1-50
// let k = 1;
// do {
//   console.log(k);
//   k++;
// } while (k <= 50);

//Write a for loop that prints out the 2 mutiplication table
// for (let multiplier = 1; multiplier <= 100; multiplier++) {
//   console.log(`2 x ${multiplier} = ${multiplier * 2}`);
// }

//Classwork
//Write a loop that prints out all the even numbers from 1 - 100

// for (let evenNum = 0; evenNum <= 100; evenNum++) {
//   if (evenNum % 2 === 0) {
//     console.log(evenNum);
//   }
// }

// const myFruitArray = ["Mango", "Pawpaw", "Orange", "Cherry", "Grape"];

// console.log(myFruitArray);
// console.log(myFruitArray.length);

// for (let i = 0; i < myFruitArray.length; i++) {
//   console.log(myFruitArray[i]);
// }

// const myFruitArray = ["Mango", "Pawpaw", "Orange", "Mango", "Cherry", "Grape"];

// myFruitArray.forEach((myFruits, index) => {
//   console.log(myFruits);
//   console.log(index);
// });

// myFruitArray.map((myMapFruits, index) => {
//   console.log(myMapFruits);
//   console.log(index);
// });

// myFruitArray.filter((myFilterFruits, index) => {
//   console.log(myFilterFruits === "Mango");
// });

// let name = "Sammy";
// let email = "sam@gmail.com";
// let bio = "I am a good boy";

// console.log(name);
// console.log(email);
// console.log(bio);

// const myTestObject = {
//   name: "Sammy",
//   email: "sam@gmail.com",
//   bio: "This is a good boy",
//   age: 23,
// };

// console.log(myTestObject.age);
// console.log(myTestObject["email"]);

// const myCustomers = {
//   customerName: "Balyon",
//   customerAge: 30,
//   customerIdNo: 27448,
//   customerAddress: {
//     state: "London",
//     country: "United Kingdon",
//     postalCode: 275848,
//   },
// };

// console.log(myCustomers.customerAddress.country);

// const myUserObject = {
//   name: "Jacob",
//   email: "jacob@gmail.com",
//   bio: "This is a good boy",
//   hobbies: ["Reading", "Dancing", "Singing", "Music", "Coding"],
// };

// console.log(myUserObject.hobbies[1]);

// console.log(
//   myUserObject.hobbies.map((data, i) => {
//     console.log(data);
//   })
// );

// const students = [
//   {
//     name: "John",
//     age: 52,
//     country: "United State of America",
//   },
//   {
//     name: "James",
//     age: 21,
//     country: "SA",
//   },
//   {
//     name: "Matthew",
//     age: 23,
//     country: "UK",
//   },
//   {
//     name: "Willams",
//     age: 30,
//     country: "Nigeria",
//   },
//   {
//     name: "Daniel",
//     age: 7,
//     country: "United State of America",
//   },
// ];

// console.log(
//   students.map((data, i) => {
//     console.log(data.age);
//   })
// );

//ES6

//Arrow Function

// function addTwoNum(a, b) {
//   return a + b;
// }

// console.log(addTwoNum(2, 4));

// const myNameFunction = (name) => {
//   console.log(name);
// };

// myNameFunction("Gerry");

// const myNumsArray = [2, 5, 7, 9, 11, 22];

// const myMapping = myNumsArray.map((num, i) => {
//   return num * num;
// });
// console.log(myMapping);

//Let and const

// let a = 20;
// console.log(a);
// a = 30;
// console.log(a);

// const b = 50;
// console.log(b);
// b = 60;
// console.log(b);

//Template Literals

// const myAge = 30 + 10;

// let myName = "My name is Sammy 32 true myAge";
// console.log(myName);

// // `${30 + 30}`

// let myNewName = "My and is Sammy and i'm ${30 + 10} years old";
// console.log(myNewName);

// let mySecondNewName = `My name is Sammy and i am ${30 + 10} years old`;
// console.log(mySecondNewName);

// const username = "Gerry";

// const user = `This is ${true}`;
// console.log(user);

// Distructuring
// const user = {
//   name: "Gerry",
//   age: 20,
//   gender: "male",
// };

// console.log(user.name);
// const { age } = user;
// const {} = {name: "Gerry",age: 20,gender: "male",}
// console.log(age);

// const myFruitArray = ["Mango", "Cassava", "Apple", "Orange", "Pawpaw"];
// console.log(myFruitArray[3]);

// const [frank, ball, red] = myFruitArray;

// console.log(red);
