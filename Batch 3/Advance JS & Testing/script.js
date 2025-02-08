// import Greet from './library.js'
import {Greet, SayHello} from './library.js'
console.log('Hello Advance JS')


//Class Representation
// class User{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }

//     greet(){
//         return `Hello ${this.name}`
//     }
// }

// const userOne = new User('James', 'james@gmail.com')
// console.log(userOne.greet())



// //Functional Display of the class
// function myUser(name, email){
//     return `Hello Function ${name}, here is my mail ${email}`
// }

// const viewUser = myUser('Sammy', 'sam@gmail.com')
// console.log(viewUser)



// //Static Methods

// class mathUtils{
//     static add(a, b){
//         return a + b
//     }
// }

// console.log(mathUtils.add(5,3))


// class User {
//     constructor(name){
//         this._name = name
//     }

//     get name(){
//         return this._name
//     }

//     set name(newName){
//         this._name = newName;
//     }
// }

// const user = new User('Olumide')
// console.log(user.name)
// user.name = 'Bob'
// console.log(user.name).


//Inheritance

// class Admin extends User {
//     constructor(name, email, role){
//         super(name, email)
//         this.role = role
//     }

//     getRole(){
//         return `Your Role: ${this.role}`
//     }
// }

// const admin = new Admin('Willams', 'willy@gmail.com', 'SuperAdmin')
// console.log(admin.getRole())
// console.log(admin.greet())


// import and export
// console.log(Greet('Abdul'))
// console.log(Greet('Abdul'))
// console.log(SayHello('Frank'))

//Try and Catch

// try{
//     let num = JSON.parse('Invalid JSON')
//     console.log('My Good Code',num)
// } catch (error){
//     console.log('An Error Occoured: my error', error)
// } finally{
//     console.log('Error handling Complect')
// }

// console.log('I ame the first Guy')
// console.log('I ame the second Guy')
// console.log('I ame the third Guy')


// console.log('I am the first guy')

// setTimeout(()=>{
//     console.log('I am the second guy')
// }, 2000)

// console.log('I am the third Guy')


// function fetchData(callback){
//     setTimeout(()=>{
//         console.log('Data has been fetched')
//         callback()
//     }, 2000)
// }

// fetchData(()=>{
//     console.log('Data is being Processed...')
//     setTimeout(()=>{
//         console.log('Data is being displayed...')
//     }, 1000)
// })

// const myPromise = new Promise((resolved, reject)=>{
//     let success = false
//     setTimeout(()=>{
//         if(success){
//             resolved('Promise resolved')
//         }else{
//             reject('Promise Rejected')
//         }
//     },2000)
// })

// myPromise.then((result)=>{return console.log(result)})
// myPromise.catch((error)=>{return console.log(error)})

// const fetchData = async ()=>{
//    try {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     let data = await response.json()
//     console.log(data)
//    } catch (error) {
//     console.log('Error fetching Data', error)
//    }
// }

// fetchData()


const fetchData = async () =>{
try {
   let response = await fetch('https://jsonplaceholder.typicode.com/users')
   let  data = await response.json()
   console.log(data)
} catch (error) {
   console.log('Error Getting Data', error)
}
}

fetchData()