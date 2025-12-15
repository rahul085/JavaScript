//  primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is the dynamically typed language.
const score=100
const scoreValue=100.3

const isLoggedIn=false
const temp=null
let userEmail;
let bigNumber=12345678901234567890123456n

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);


// Non-Primitive

// Arrays, Objects, Functions

const heros=["Superman","SpiderMan","Batman"]
let myObj={
    name: "Rahul",
    age: 22
}

const myFunction=function (){
console.log("Hello");
}

// console.log(typeof bigNumber)
// console.log( typeof myFunction)
// console.log(typeof anotherId)


//++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive), Heap(Non-primitive)


let myName="Rahul"
let anotherName=myName
// anotherName="Neeli"
// console.log(myName)
// console.log(anotherName)


let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne
userTwo.email="Rahul@google.com"

console.log(userOne.email)
console.log(userTwo.email);



