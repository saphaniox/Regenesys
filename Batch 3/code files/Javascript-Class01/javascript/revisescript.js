// console.log("hudyhdnsdjj");

// var a = 3;
// a = 7;

// let b = 45;
// b = 37;

// const c = 34;
// c = 67;

// console.log(a);
// console.log(b);

// let a = 22;

// // Data types
// // 1. String
// let name = "Samuel";

// // 2. Numbers
// let myNum = 1234567890;

// // 3. Boolean
// let myBool = false;

// // 4. Null
// let myNull = null;

// // 5. undefine
// let userName;
// console.log(userName);

// // 6. Objects
// let myData = {
//   name: "Samuel",
//   age: 22,
//   country: "Nigeria",
//   state: "Lagos",
//   food: "Bread",
//   isAdmin: true,
//   isCurrent: null,
// };

// // 7. Functions
// function add(a, b) {
//   console.log(a + b);
// }
// add(2, 3);

// let myAdd = (c, d) => {
//   console.log(c + d);
// };

// myAdd(3, 4);

// // 8. Arrays
// let myArray = ["Gerry", "Lushen", "ThankGod", 45, 67, "Orange", true, "Mango"];

// console.log(myArray);

//Operators
//Arithemetic Operators: Addition, Subtraction, Multiplication, Devision and Modoulus

// const a = 8;
// const b = 45;

// console.log(a + b);
// console.log(b % a);

//Comparism Operators:
// Assignent EqualsTo =,
// StrictlyEqals to ===,
// EqualsTo ==,
// NotEqualto !=
// Greater Than >
// Less Than <
// Greater Than Equals To >=
// Less Than Equals To <=

// const a = 5;
// const b = 44;
// console.log(a == b);
// console.log(a);
// console.log(b);
// console.log(a === b);
// console.log(a != b);
// console.log(a > b);

// const admin = "samuel";

// const username = "samuel";
// console.log(admin === username);

//Logical Operators
// Logical AND &
// Logical OR ||
// Logical NOT !

// const isStudent = true;
// const isRegistered = true;
// const isUniform = true;

// if (isStudent & isRegistered & isUniform) {
//   console.log("This is a full student");
// }

// if (isStudent || isRegistered || isUniform) {
//   console.log("This is a student");
// }

//Unary Operators
// Increanment Operators ++
// Decreanment Operators --

// let a = 3;

// a++;
// a--;
// console.log(a);

// Tunary Operators

//(condition) ? "This is true" : "This is false"
39 > 46
  ? console.log("the first is greater")
  : console.log("the second is greater");

if (3 > 4) {
  console.log("This is a good day");
}

if (3 > 1) {
  console.log("This is a good day");
} else {
  console.log("This is not a good day");
}

const a = 3;
const b = 3;

if (a > b) {
  console.log("This is the greatest");
} else if (a < b) {
  console.log("This is not the greatest");
} else if (a === b) {
  console.log("This has equal values");
} else {
  console.log("Enter a valid number");
}

const myOddNumberCheck = (num) => {
  if (num % 2 === 1) {
    console.log(`${num} is an Odd number`);
  } else {
    console.log(`${num} is an Even number`);
  }
};

myOddNumberCheck(87);

//Class Work
// Declear difftient viriables and perform javascript opreations on them and also perform conditions on them then create a function on them

// Event Handler
const sendAMessage = () => {
  const hello = prompt("Enter your name");
  return alert("My name is " + hello);
};

const addTwoNum = (a, b) => {
  return a + b;
};

console.log(addTwoNum(2, 3));

for (let a = 0; a < 100; ) {
  console.log(a);
  a++;
}
