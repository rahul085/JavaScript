let myDate=new Date()
// console.log(myDate); //output:- 2025-12-15T13:31:31.400Z

// console.log(myDate.toString())//output:- Mon Dec 15 2025 13:31:31 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())//output:- Mon Dec 15 2025
// console.log(myDate.toLocaleString())//output:- 12/15/2025, 1:31:31 PM
// console.log(myDate.toLocaleDateString())// output:- 12/15/2025

// console.log(typeof myDate) // it is an object

// let myCreatedDate=new Date(2025,0,23) // year, month(0-jan,1-feb....11-dec), date  
// let myCreatedDate=new Date(2025,0,23,5,3)
// let myCreatedDate=new Date("2025-01-14") //(year-month-day) output(mm-dd-yy)
let myCreatedDate=new Date("01-14-2023")//  indian way of representation (month-day-year)
//console.log(myCreatedDate.toLocaleString())



let myTimeStamp=Date.now()
// console.log(myTimeStamp);// result in milliseconds
// console.log(myCreatedDate.getTime());// date to milli seconds
// console.log(Math.floor(Date.now()/1000))// date to seconds


let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

console.log(
newDate.toLocaleString('default',{
    weekday:'short'
}))



