const score=400

const balance=new Number(100)
// console.log(score);


// console.log(balance);


// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // to display the number of digits after the decimal point output: 100.00

const otherNumber=123.8966

//console.log(otherNumber.toPrecision(4));

const hundreds=1000000

//console.log(hundreds.toLocaleString('en-IN')) // output: 10,00,000(in indian representation)


// +++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(4));// converts negative number to a positive number and the positive number remains the same

// console.log(Math.round(4.6)) // rounds off a number based on the value after the decimal
// console.log(Math.ceil(4.2)) // output is 5 (if  the number is even slightly greater than 4 it will round it off to 5 )  
// console.log(Math.floor(4.6))   // even if the number is greater than the 4 it will give result as 4

//console.log(Math.sqrt(36))


// console.log(Math.min(4,3,5,9,6))
// console.log(Math.max(4,3,5,9,6))


//console.log(Math.random())// gives values in between 0 and 1 randomly

//console.log(Math.floor(Math.random()*10)+ 1)


// --- Configuration ---
// Define the range for the random number generation
const min = 10;
const max = 20;

// --- Random Number Generation Logic ---

// 1. Calculate the total number of possibilities (inclusive of both min and max)
// Formula: (max - min + 1) -> (20 - 10 + 1) = 11 possibilities
const rangeSize = max - min + 1;

// 2. Generate a random decimal between 0 (inclusive) and 1 (exclusive)
const randomDecimal = Math.random();

// 3. Scale the decimal to fit within the range size (0 to 10.99...)
// 4. Floor the result to get an integer (0 to 10)
const randomOffset = Math.floor(randomDecimal * rangeSize);

// 5. Add the 'min' value to shift the starting point from 0 to 10
const finalResult = randomOffset + min;

// --- Output ---
console.log(`Random number between ${min} and ${max}:`, finalResult);

/* Shorthand version (commonly used in production):
   console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
*/



