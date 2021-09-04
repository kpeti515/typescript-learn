let bar;
function foo() {
  return true;
}
if (foo()) {
  bar = 0;
}
console.log(bar);
console.log(new Date());

const c = 11;

console.log(c * 2);

// object types:
function printCoordinates(pt: { x: number; y: number }) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's x value is ${pt.y}`);
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
  console.log(`The coordinate's x value is ${pt.x} at your position`);
  console.log(`The coordinate's x value is ${pt.y} at your position`);
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
