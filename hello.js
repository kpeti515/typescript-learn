console.log('Hello World!');
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toLocaleTimeString()}!`);
}
let bar;
function foo() {
  return true;
}
if (foo()) {
  bar = 0;
}
console.log(bar);
greet('Lorand', new Date());
const c = 12;
console.log(c * 2);
