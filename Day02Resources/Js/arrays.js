/* ===== ARRAYS ===== */

/*
*An array is a data structure in JavaScript that allows you to 
*store and manipulate a collection of values. 
*Arrays can hold any type of data, including strings, numbers, objects, and other arrays.
*/




// Create an array literal
const colors = ['red', 'green', 'blue'];

// Access array elements using indexing
console.log(colors[0]); // "red"
console.log(colors[2]); // "blue"

// Update array elements using indexing
colors[1] = 'yellow';
console.log(colors); // ["red", "yellow", "blue"]

// Add elements to the end of an array using push method
colors.push('orange', 'purple');
console.log(colors); // ["red", "yellow", "blue", "orange", "purple"]

// Remove elements from the end of an array using pop method
colors.pop();
console.log(colors); // ["red", "yellow", "blue", "orange"]

// Add elements to the beginning of an array using unshift method
colors.unshift('pink', 'brown');
console.log(colors); // ["pink", "brown", "red", "yellow", "blue", "orange"]

// Remove elements from the beginning of an array using shift method
colors.shift();
console.log(colors); // ["brown", "red", "yellow", "blue", "orange"]
