// array
//In java script, arrays aren't primitives but are instead Array objects
// in java script the arrays are resizable and a mix of different data types
// arrays in js are zero-indexed
const myArray=[0,1,2,3,4,5] 
const myHeros=["superman","batman","joker"]

const myArr2=new Array(1,2,3,4)

//console.log(myArray[3]);// accessing elements


// Array methods

// myArray.push(6)// adds element to the end of the array
// myArray.push(7)// adds element to the end of the array
// myArray.pop() // removes the last value of array.

// myArray.unshift(9)// adds element at the first position of the array
// myArray.shift() // removes the first element of the array

// console.log(myArray.includes(9));// false
// console.log(myArray.indexOf(9)); // if the value is not present it returns -1
// console.log(myArray.indexOf(3))

const newArray=myArray.join()

// console.log( typeof myArray)// object
// console.log( typeof newArray)// string

// slice, splice

console.log("A ",myArray);

const myn1=myArray.slice(1,3)
console.log(myn1);
console.log("B ",myArray)


const myn2=myArray.splice(1,3)
console.log("C ",myArray)
console.log(myn2);

/*
 * ======================================================================================
 * COMPARISON: .slice() vs .splice()
 * ======================================================================================
 *
 * 1. PRIMARY PURPOSE
 * -------------------
 * - slice() : Used to COPY a portion of an array without modifying the original.
 * Think of it like "slicing a piece of cake" (the rest of the cake stays).
 * - splice(): Used to MODIFY an array by adding, removing, or replacing elements.
 * Think of it like "splicing a wire" (you are physically changing the wire).
 *
 * 2. MUTABILITY (Does it change the original array?)
 * ---------------------------------------------------
 * - slice() : IMMUTABLE. It does NOT change the original array.
 * - splice(): MUTABLE. It DIRECTLY CHANGES the original array.
 *
 * 3. SYNTAX & PARAMETERS
 * -----------------------
 * - slice(startIndex, endIndex)
 * * startIndex: Index to begin extraction (inclusive).
 * * endIndex  : Index to stop extraction (EXCLUSIVE - up to, but not including).
 * (Optional. If omitted, slices to the end).
 *
 * - splice(startIndex, deleteCount, item1, item2, ...)
 * * startIndex : Index to start changing the array.
 * * deleteCount: Number of elements to remove (0 if you only want to insert).
 * * itemN      : (Optional) Elements to add to the array at the startIndex.
 *
 * 4. RETURN VALUE
 * ----------------
 * - slice() : Returns a NEW ARRAY containing the extracted elements.
 * - splice(): Returns an ARRAY containing the DELETED elements (if any).
 * (If no elements are removed, it returns an empty array []).
 *
 * ======================================================================================
 */


const originalArray = ['A', 'B', 'C', 'D', 'E'];

// --- SLICE EXAMPLE (Non-destructive) ---
// We want a copy of 'B' and 'C' (Index 1 up to 3)
const slicedPortion = originalArray.slice(1, 3);

console.log("--- SLICE RESULTS ---");
console.log("Returned Value:", slicedPortion); // Output: ['B', 'C']
console.log("Original Array:", originalArray); // Output: ['A', 'B', 'C', 'D', 'E'] (Unchanged)


// --- SPLICE EXAMPLE (Destructive) ---
// We want to remove 'B' and 'C' and insert 'X' in their place.
// Start at index 1, remove 2 items, add 'X'.
const splicedItems = originalArray.splice(1, 2, 'X');

console.log("\n--- SPLICE RESULTS ---");
console.log("Returned Value:", splicedItems);  // Output: ['B', 'C'] (The deleted items)
console.log("Original Array:", originalArray); // Output: ['A', 'X', 'D', 'E'] (Changed!)











