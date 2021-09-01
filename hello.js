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
console.log(new Date());
greet('Lorand', new Date());
const c = 11;
console.log(c * 2);
// equality narrowing
function example(x, y) {
  if (x === y) {
    x.toLowerCase();
    y.toUpperCase();
  } else {
    console.log(x, y);
  }
}
example('asd', 'lol');
function multiplyValue(container, factor) {
  if (container.value != null) {
    console.log(container.value);
    const multipliedValue = container.value * factor;
    console.log(multipliedValue);
  }
}
multiplyValue({ value: 22 }, 3);
function move(animal) {
  if ('swim' in animal) {
    return animal.swim();
  }
  return animal.fly();
}
const bird = {
  swim: () => console.log('I can swim')
};
const fish = {
  fly: () => console.log('I can fly')
};
const human = {
  swim: () => console.log('I can swim')
};
move(bird);
move(fish);
move(human);
function logTime(x) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toLowerCase());
  }
}
logTime(new Date());
logTime('today');
// object types:
function printCoordinates(pt) {
  console.log(`The coordintate's x value is ${pt.x}`);
  console.log(`The coordintate's x value is ${pt.y}`);
}
printCoordinates({ x: 25, y: 15 });
function printName({ first, last }) {
  console.log(`Welcome ${first} ${last ?? ''}`);
}
printName({ first: 'Bob', last: 'Fisher' });
printName({ first: 'Alison' });
// union types
function printID(id) {
  console.log(`Your ID is: ${id}`);
}
printID(101);
printID('1A11');
function welcomePeople(x) {
  if (Array.isArray(x)) {
    console.log(`Hello ${x.join(' and ')}`);
  } else {
    console.log(`Welcome lone traveler ${x}`);
  }
}
welcomePeople(['Bob', 'Joe']);
welcomePeople('Alice');
function printMyCoordinates(pt) {
  console.log(`The coordintate's x value is ${pt.x} at your position`);
  console.log(`The coordintate's x value is ${pt.y} at your position`);
}
printMyCoordinates({ x: 25, y: 11 });
function print3D(pt) {
  console.log(`The 3D x value is ${pt.x} at your position`);
  console.log(`The 3D x value is ${pt.y} at your position`);
  console.log(`The 3D x value is ${pt.z} at your position`);
}
print3D({ x: -1, y: 1, z: 2 });
// Type assertions
const x = 'hello';
console.log(x.length);
// literal types
function printText(s, alignment) {
  console.log(`Text: ${s} \nPosition: ${alignment}`);
}
printText('Do it like a pro!', 'center');
function configure(y) {
  return y;
}
configure({ width: 100 });
configure('auto');
const obj = { counter: 0 };
if (configure('auto')) {
  obj.counter = 1;
}
function handleRequest(url, method) {
  return url + method;
}
const req = { url: 'https://example.com', method: 'GET' };
handleRequest(req.url, req.method);
// strictNullChecksOn
function nullCheck(z) {
  if (z === null) {
    console.log('Meh, a null again... At least I have nothing to do with it...');
  } else {
    console.log(`Given input: ${z} which is ${z.toLowerCase()} as lowercase `);
    console.log(typeof z);
  }
}
nullCheck(null);
nullCheck('SampleString');
// non-null assertion operator (Postfix!)
function liveDangerously(justASimpleFloat) {
  console.log(justASimpleFloat.toFixed());
}
// liveDangerously()-> would create runtime error, postfix ! says that you are sure that it will never be undef or null
// liveDangerously(null) -> would create runtime error, postfix ! says that you are sure that it will never be undef or null
liveDangerously(10.2321);
// narrowing
function padLeft(padding, input) {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input;
  }
  return padding + input;
}
padLeft(11, 'asd');
function printAll(strs) {
  if (strs && typeof strs === 'object') {
    console.log(`Array items: ${strs.join(', ')}`);
  } else {
    console.log(`The string which you provided: ${strs}`);
  }
}
printAll(null);
printAll('Lolika-Bolka');
printAll(['I', 'love', 'pancakes']);
function multiplyAll(values, factor = 2) {
  if (!values) {
    return console.log(values);
  }
  return values.map((value) => value * factor);
}
const mathNumbers = undefined;
multiplyAll(mathNumbers);
multiplyAll([22, 3, 432, 34]);
