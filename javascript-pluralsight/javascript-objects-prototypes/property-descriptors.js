
var cat = {
    name : 'Fluffy',
    color : 'White'
};

console.log();

cat['cool sound'] = 'nice';

// Object cat
console.log(cat);
console.log(cat.name);
console.log(cat['name']);
console.log(cat['cool sound']);


// checking property descriptor
console.log(Object.getOwnPropertyNames(cat));
console.log(Object.getOwnPropertyDescriptor(cat, 'name'));
