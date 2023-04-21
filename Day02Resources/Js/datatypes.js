/* =================== Data Types =================== */

/* 
! Data types are the classifications we give to the different kinds of data that we use in programming.
* JavaScript is a dynamically typed language, which means that you don't have to explicitly define the data type of a variable when you declare it. The data type is determined automatically when the value is assigned to the variable.

! JavaScript has seven different data types:
* Number
* String
* Boolean
* Null
* Undefined
* Symbol
? Object - Talk in object.js

! The typeof operator is used to determine the data type of a variable.
* typeof returns a string indicating the data type of the variable.
* typeof can be used to determine the data type of a variable before it has been assigned a value.
* typeof can also be used to determine the data type of a variable after it has been assigned a value.
* typeof can be used to determine the data type of a variable that has been declared but not assigned a value.
*/

// Declaring variables with different value types
const name = 'John';
const age = 25;
const isMarried = false;
let job;

// Using typeof to determine the data type of a variable
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isMarried); // "boolean"
console.log(typeof job); // "undefined"
