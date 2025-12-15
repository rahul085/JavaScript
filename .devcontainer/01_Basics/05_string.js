const name="Rahul"
const repoCount=50
//console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName= new String('rahul-Tec')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

const newString=gameName.substring(0,4);
console.log(newString)

const anotherString=gameName.slice(4)
console.log(anotherString)


const newString1="  Rahul   ";
console.log(newString1)
console.log(newString1.trim())


const url= "https://rahul.com/rahul%20neeli"
console.log(url.replace('%20','-'))


console.log(url.includes('rahul'))

console.log(gameName.split('-'));



