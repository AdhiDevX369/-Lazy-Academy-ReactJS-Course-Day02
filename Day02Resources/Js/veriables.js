/*===== VARIABLES ===== */


/* 
* In JavaScript, variables are used to store values that can be used throughout your code.
* There are three different ways to declare variables in JavaScript: var, let, and const.
*/

/* 
! ===== var =====
* var is the oldest way to declare variables in JavaScript, and it is still supported in modern versions of the language. 
* However, var has some limitations that make it less popular in modern JavaScript development.

! Here's a brief explanation of each type of variable and why var is less commonly used:

? var: This keyword is used to declare a variable in JavaScript. var has function scope, which means that a variable declared with var is accessible within the function in which it is declared. 
? However, var does not have block scope, which can lead to unexpected behavior in more complex code. 
*/

/*
! ===== let =====
* let is a new keyword that was introduced in ES6 (ECMAScript 2015).
* let is used to declare a variable that can be updated later in the code.
* let has block scope, which means that a variable declared with let is only accessible within the block in which it is declared.
*/

/*
! ===== const =====
* const is a new keyword that was introduced in ES6 (ECMAScript 2015).
* const is used to declare a variable that cannot be updated later in the code.
* const has block scope, which means that a variable declared with const is only accessible within the block in which it is declared
*/

/* 
! ====== Variable Hoisting ======
* Variable hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
* In JavaScript, a variable can be declared after it has been used.
* In other words; a variable can be used before it has been declared.
*/

// Declaring a variable using var
var name = 'John';

// Updating the variable
name = 'Jane';

// Declaring a variable using let
let age = 25;

// Updating the variable
age = 30;

// Declaring a constant variable
const PI = 3.14;

// This will result in an error, since PI cannot be re-assigned
PI = 3.14159; 
