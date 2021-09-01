console.log('Hello World!');

function greet(person: string, date: Date) {
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
function printCoordinates(pt: { x: number; y: number }) {
  console.log(`The coordintate's x value is ${pt.x}`);
  console.log(`The coordintate's x value is ${pt.y}`);
}
printCoordinates({ x: 25, y: 15 });

function printName({ first, last }: { first: string; last?: string }) {
  console.log(`Welcome ${first} ${last ?? ''}`);
}
printName({ first: 'Bob', last: 'Fisher' });
printName({ first: 'Alison' });

// union types
function printID(id: number | string) {
  console.log(`Your ID is: ${id}`);
}
printID(101);
printID('1A11');

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log(`Hello ${x.join(' and ')}`);
  } else {
    console.log(`Welcome lone traveler ${x}`);
  }
}
welcomePeople(['Bob', 'Joe']);
welcomePeople('Alice');

// type aliases
type Point = {
  x: number;
  y: number;
};
function printMyCoordinates(pt: Point) {
  console.log(`The coordintate's x value is ${pt.x} at your position`);
  console.log(`The coordintate's x value is ${pt.y} at your position`);
}
printMyCoordinates({ x: 25, y: 11 });

// interfaces
interface ThreeDPoint {
  x: number;
  y: number;
  z: number;
}
function print3D(pt: ThreeDPoint) {
  console.log(`The 3D x value is ${pt.x} at your position`);
  console.log(`The 3D x value is ${pt.y} at your position`);
  console.log(`The 3D x value is ${pt.z} at your position`);
}
print3D({ x: -1, y: 1, z: 2 });

// Type assertions
const x = 'hello' as string;
console.log(x.length);

// literal types
function printText(s: string, alignment: 'left' | 'right' | 'center') {
  console.log(`Text: ${s} \nPosition: ${alignment}`);
}
printText('Do it like a pro!', 'center');

// literal with interface
interface Options {
  width: number;
}
function configure(y: Options | 'auto') {
  return y;
}
configure({ width: 100 });
configure('auto');

const obj = { counter: 0 };
if (configure('auto')) {
  obj.counter = 1;
}

function handleRequest(url: string, method: 'GET' | 'POST') {
  return url + method;
}
const req = { url: 'https://example.com', method: 'GET' as 'GET' };
handleRequest(req.url, req.method);

// strictNullChecksOn
function nullCheck(z: string | null) {
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
function liveDangerously(justASimpleFloat?: number | null) {
  console.log(justASimpleFloat!.toFixed());
}

// liveDangerously()-> would create runtime error, postfix ! says that you are sure that it will never be undef or null
// liveDangerously(null) -> would create runtime error, postfix ! says that you are sure that it will never be undef or null
liveDangerously(10.2321);

// narrowing
function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input;
  }
  return padding + input;
}
padLeft(11, 'asd');

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    console.log(`Array items: ${strs.join(', ')}`);
  } else {
    console.log(`The string which you provided: ${strs}`);
  }
}
printAll(null);
printAll('Lolika-Bolka');
printAll(['I', 'love', 'pancakes']);

function multiplyAll(values: number[] | undefined, factor = 2): number[] | void {
  if (!values) {
    return console.log(values);
  }
  return values.map((value) => value * factor);
}
const mathNumbers = undefined;
multiplyAll(mathNumbers);
multiplyAll([22, 3, 432, 34]);

// equality narrowing
function example(ex: string | number, y: string | boolean) {
  if (ex === y) {
    ex.toLowerCase();
    y.toUpperCase();
  } else {
    console.log(ex, y);
  }
}
example('asd', 'lol');

interface Container {
  value: number | null | undefined;
}
function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value);
    const multipliedValue = container.value * factor;
    console.log(multipliedValue);
  }
}
multiplyValue({ value: 22 }, 3);

// the in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim: () => void; fly: () => void };

function move(animal: Fish | Bird | Human) {
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

// instanceof narrowing
function logTime(time: Date | string) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time.toLowerCase());
  }
}
logTime(new Date());
logTime('today');
