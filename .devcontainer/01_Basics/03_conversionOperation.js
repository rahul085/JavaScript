
// let score= 33  if we use let valueInNumber= Number(score) type is number
// let score= "33"  if we use let valueInNumber= Number(score) type is number
// let score= "33aaa"  if we use let valueInNumber= Number(score) type is number
// but now if we print score using console.log(valueInNumber) we get NaN(not a number) as result
// let score= true  if we use let valueInNumber= Number(score) and print it we get the 1 as a result


// console.log(typeof score)
// console.log(typeof(score))
let score="33"

let valueInNumber= Number(score)
// console.log(typeof valueInNumber)
// console.log( valueInNumber)


// "33" => 33
// "33abc" => Nan
// true => 1; false => 0


let isLoggedIn =""

let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false
// "hitesh" => true



let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


