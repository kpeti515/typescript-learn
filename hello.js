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
// object types:
function printCoordinates(pt) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's x value is ${pt.y}`);
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
  console.log(`The coordinate's x value is ${pt.x} at your position`);
  console.log(`The coordinate's x value is ${pt.y} at your position`);
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
function printAll(strings) {
  if (strings && typeof strings === 'object') {
    console.log(`Array items: ${strings.join(', ')}`);
  } else {
    console.log(`The string which you provided: ${strings}`);
  }
}
printAll(null);
printAll('MEH');
printAll(['I', 'love', 'pancakes']);
function multiplyAll(values, factor = 2) {
  if (!values) {
    return console.log(`Input was ${values}`);
  }
  return values.map((value) => value * factor);
}
const mathNumbers = undefined;
multiplyAll(mathNumbers);
multiplyAll([22, 3, 432, 34]);
// equality narrowing
function example(ex, y) {
  if (ex === y) {
    ex.toLowerCase();
    y.toUpperCase();
  } else {
    console.log(ex, y);
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
  fly: () => console.log('I can swim')
};
const fish = {
  swim: () => console.log('I can fly')
};
const human = {
  swim: () => console.log('I can swim')
};
move(bird);
move(fish);
move(human);
// instanceof narrowing
function logTime(time) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time.toLowerCase());
  }
}
logTime(new Date());
logTime('today');
// Assignments
let asd = Math.random() < 0.5 ? 10 : 'hello world';
asd = 1;
console.log(asd);
asd = 'I love to dance!';
console.log(asd);
// Control flow analysis
// Using type predicates
function isFish(pet) {
  return pet.swim !== undefined;
}
isFish(fish);
function getSmallPet() {
  return Math.random() > 0.5 ? bird : fish;
}
const pet = getSmallPet();
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
const zoo = Array.from({ length: 3 }, () => getSmallPet());
const underWater1 = zoo.filter(isFish);
console.log(underWater1);
function getArea(shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      // eslint-disable-next-line no-case-declarations
      const exhaustiveCheck = shape;
      return exhaustiveCheck;
  }
}
getArea({ kind: 'circle', radius: 20 });
getArea({ kind: 'square', sideLength: 20 });
