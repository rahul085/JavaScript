const accountId=1425
let accountEmail="rahul@gmail.com"
var accountPassword="12345"
accountCity="Hyderabad"

let accountState;

// accountId=2  // not allowed.

accountEmail="neeli@gmail.com"
accountPassword=1235
accountCity="Bangalore"

/*

prefer not to use var
because of issue in block scope and functional scope


we can declare a variable without using any let,const or var . it is possible but, it is a bad practise.


if we declare a variable and did not assign a value to it then its value would be undefined.


*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

