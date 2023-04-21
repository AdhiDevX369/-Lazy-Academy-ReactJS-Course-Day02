/* ===== OBJECTS ===== */
/*
 * An object is a complex data type in JavaScript 
 * that allows you to store a collection of key-value pairs. 
 * Each key in the object is a unique identifier, also known as a property, 
 * that is associated with a specific value. 
 */

// Create an object literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    hobbies: ['reading', 'swimming', 'traveling'],
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    },
    getFullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  // Access object properties using dot notation
  console.log(person.firstName); // "John"
  console.log(person.age); // 25
  console.log(person.address.city); // "Anytown"
  
  // Access object properties using bracket notation
  console.log(person['lastName']); // "Doe"
  
  // Update object properties
  person.age = 30;
  person.address.city = 'New York';
  console.log(person.age); // 30
  console.log(person.address.city); // "New York"
  
  // Call object methods
  console.log(person.getFullName()); // "John Doe"
  