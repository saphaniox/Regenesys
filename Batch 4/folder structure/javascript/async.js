// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data Fected");
//     callback();
//   }, 2000);
// }

// // console.log("I am ready");

// fetchData(() => {
//   console.log("Processing Data...");
//   setTimeout(() => {
//     console.log("Displaying Data...");
//   }, 1000);
// });

//Promises In Javascript

// const myPromise = new Promise((resolve, reject) => {
//   let success = false;
//   setTimeout(() => {
//     if (success) {
//       resolve("Promise Resolved");
//     } else {
//       reject("Promise Rejected");
//     }
//   }, 2000);
// });

// myPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// console.log(myPromise);

//Async/Await

// console.log("https://jsonplaceholder.typicode.com/users");

// const fetchData = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(data);
// };

// fetchData();
// console.log("Ready");

const getMyData = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Failed to fetch data", error);
  }
};

getMyData();
