console.log('Hello World!');
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toLocaleTimeString()}!`);
}
greet('Lorand', new Date());
