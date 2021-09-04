console.log('Hello World!');

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toLocaleTimeString()}!`);
}

greet('Lorand', new Date());
