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

// for (let z = 1; z <= 20; z++) {
//   console.log("2 x " + z + " = " + z * 2);
// }

// Write a loop that prints out the only the even numbers of the 2times multiplication table from 2 to 60 e.g 2x2=4, 2x4=8, 2x6=12


// console.log('hello')

// for(let i=1; i<=12; i++){
//     console.log(`5 x ${i} = ${i*5}`)}

// for(let i=1; i<=12; i++){
//     console.log(`Mutiplication Table of ${i}`)
//     for(let j=1; j<=12; j++){
//         console.log(`${i} x ${j} = ${i*j}`)
//     }
// }

// Backtic or Template Literals
// const num1 = 30
// const num2 = 70
// console.log('Your First Number is ${num1}')
// console.log(`Your first number is ${num1}`)

// Iterating through an array

// const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes']
// console.log(fruits)
// for(let i =0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// for(let k=0; k<5; k++){
//     console.log(k)
// }

// Other Array Methods

//For Each
const names = ['John', 'Jane', 'Jack', 'Bill', 'James', 'Jenny', 'Jasper']
const students = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 22},
    {name: 'Jack', age: 23},
    {name: 'Bill', age: 24},
    {name: 'James', age: 26},
    {name: 'Jenny', age: 21},
    {name: 'Jasper', age: 27}
]
// console.log(names)
// console.log(names.forEach(myName => console.log(myName)))
// console.log(names.forEach(myName => console.log(myName)))
// console.log(names.forEach((myName)=>{console.log(myName)}))
// console.log(students.forEach((myName)=>{console.log(myName.name)}))
// console.log(students.forEach((myName)=>{console.log(myName.age)}))

// Map
// console.log(names)
// console.log(students.map((allNames)=>{return allNames.name}))
// console.log(students.map((allNames)=>{return allNames.age}))

// Filter
// console.log(students.filter((myAge)=>{return myAge.age < 23}))
// console.log(students.filter((myAge)=>{return myAge.age > 23}))


// const student = {
//     name: 'John',
//     age: 25,
//     isGraduated: true,
//     subjects: ['Math', 'English', 'Science'],
//     address: {
//         street: '123 Main Street',
//         city: 'New York',
//         state: 'NY'
//     }
// }
// console.log(student['name'])
// console.log(student.isGraduated)
// console.log(student.address.street)
// console.log(student.subjects[1])

// const country = {
//     name: 'Nigeria',
//     population: 200000000,
//     precident:{
//         name: "bola",
//         age: 60,
//         gender: 'male'
//     }
// }

// console.log(country.name)
// console.log(country.precident.age)

//ES6
//Arrow Function

// function add(a, b){
//     return a + b
// }

// console.log(add(5, 10))
// console.log(add(67, 67))
// console.log(add(333, 872))
// console.log(add(763, 83))

// const add2 = (c,d)=>{return c + d}
// console.log(add2(34, 62))

// //Let and Const
//  let name = 'John'
//     name = 'David'
//     console.log(name)

// const age = 25
// console.log(age)

//Template Literals
// let name = 'John Doe'
// let story = 'There is a boy named name. He is 25 years old. John is a good guy and he is a software developer'
// let trmplateStory = `There is a boy named ${name}. He is 25 years old. ${name} is a good guy and he is a software developer`

// console.log(trmplateStory)

//Distructuring
const allFruits = ['apple', 'nut', 'banana', 'mango', 'orange', 'grapes', 'pineapple', 'strawberry', 'pear', 'kiwi', 'watermelon ']
// console.log(allFruits)
// console.log(allFruits[1])


// const [fruit1, fruit2, ...remainingFruit] = ['apple', 'banana', 'mango', 'orange', 'grapes']

// const [fruit1, fruit2, ...remainingFruit] = allFruits
// console.log(remainingFruit)
// console.log(fruit2)

// const student = {name: 'John', age:20, gender: 'male'}

// const {age, name} = student
// console.log(age)



//DOM in Javascript

// console.dir(document)
// console.log(document)

// const title  = document.getElementById('mainTitle')
// console.log(title)
// title.textContent = 'This is From the DOM'
// title.style.color = 'red'
// title.style.fontSize = '50px'

// const button = document.querySelector('.ball')
// console.log(button)





// const javaEventButton = document.getElementById('myButton')
// console.log(javaEventButton)
// const removeMyEvent = document.getElementById('removeEventBtn')

// function handleClick(){
//     alert('This Button Has Been Clicked')
// }

// javaEventButton.addEventListener('click', handleClick)

// removeMyEvent.addEventListener('click', ()=>{
//     javaEventButton.removeEventListener('click', handleClick)
//     alert('Event has been removed')
// })



// //Accessing Input Field
// const nameInput = document.querySelector('.inputField')
// console.log(nameInput.value)

// //capture the value of the input field
// nameInput.addEventListener('change',(e)=>{
//     e.preventDefault()
//     alert(nameInput.value)
    
// })





document.getElementById('myForm').addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    if(name === '' || email === '' || password === '' || confirmPassword === ''){
        alert('Please Fill in all fields')
    }else if(password !== confirmPassword){
        alert('Password do not match')
    }else{
        alert('Form Submitted Successfully')
        document.getElementById('message').textContent = `Welcome ${name}`
    }

    
})