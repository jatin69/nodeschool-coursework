'use strict';

var cat = {
    name : { Fname : 'Fluffy', Lname: 'Lisa'},
    color : 'White'
};

console.log();

// checking property descriptor
console.log(Object.getOwnPropertyNames(cat));
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));

/* writable property
- can't change the pointer name after setting it false
- But if name is an object, i can actually change
- To prevent this, i need to freeze it
*/
Object.defineProperty(cat, 'name', { writable : false});
Object.freeze(cat.name);
// cat.name.Fname = "blah";
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));

