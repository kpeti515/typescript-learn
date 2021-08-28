"use strict";
console.log('Hello World!');
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toLocaleTimeString()}!`);
}
let bar;
function foo() { return true; }
if (foo()) {
    bar = 0;
}
greet('Lorand', new Date());
let a = 0;
a = 2 ? a = 25 :
    a = 20 ? a = 15 : a = 20;
const c = 12;
