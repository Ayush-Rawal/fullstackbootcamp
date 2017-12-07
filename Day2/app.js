var a = 5;
console.log(a);
console.error(a);
console.info(a);
console.warn(a);

var numbers = [1, 4, 5, 7];

person = {};
//person.name = ayush; //treats ayush as variable
person.name = "Ayush";
person.age = 18;
personalbar.name = ["9414014444", "9716617559"];
person.address = {};
person.address.street = "J L N Marg";
person.address.city = "Jaipur";

person.speak = function() {
    console.log("Hello");
}

person.speak();

console.log(person);

person.phones.push("8368498568");

// numbers.push(8); //push returns length of an array
// numbers.pop(); // pop returns the removed element
var deleted = numbers.splice(1, 2); //deleted contains 4,5
numbers.splice(1, 2, 9, 10); //removes the elements then appends the rest at their place
numbers.reverse();
var joinedstring = numbers.join("-"); // join reutrns the modified copy does not modify the original
var splittedstring = joinedstring.split(":");

//.indexof() .charAt() return index of character, or character at index 

//functions can be chained
var title = "This is India";
title.split().reverse().join();

// All variables are referance variables by default

person2 = person;
person.name = "ajay";
console.log(person);
console.log(person2);
// copy by referance(labelling) is also called DEEP copying
// Counterpart is shallow copy
// For shallow copy use a function that returns the value ex: concat();
// Concat for arrays, copy for objects

nums = numbers; // DEEP
nums2 = numbers.concat([]); // SHALLOW


// Callback functions
var sum = function(a, b) {
    return a + b;
}
var diff = function(a, b) {
    return a - b;
}
var operation = function(fx, a, b) { // passes definition of function 
    return fx(a, b);
}

// if diff is defined like above then defining it after operation will not work
// but if it is defined as C-style function then it works
// This is called Hoisting

var r = operation(sum, 5, 4);
var r2 = operation(diff, 5, 4);

// Ass 3:
setTimeout(fx, 2000) // runs fx after 2000 (2 s)

// Use parseInt, parseFloat for typecasting

// Assignment 1:
// Create an object for a facebook post
// Assignment 2:
// Do a word by word reverse This is India -> India is This
// 1 output should be "India is This"
// Output 2 should be "sihT si aidnI"
// Assignment 3:
// Explore date object, Random object, Timeout