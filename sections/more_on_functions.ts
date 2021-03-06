// Function type expressions
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  fn('Hello world');
}
function printToConsole(s: string) {
  console.log(s);
}
greeter(printToConsole);
// call signatures
type describableFunction = {
  description: string;
  (someArg: number): boolean;
};
function dummyFunction(fn: describableFunction) {
  console.log(`${fn.description} returned ${fn(6)}`);
}
function dummyParameter(magicNumber: number) {
  return magicNumber === 6;
}
dummyParameter.description = 'Understanding call signatures';
dummyFunction(dummyParameter);

// construct signatures
type SomeObject = void;
type SomeConstructor = {
  new (s: string): SomeObject;
};

class Hello {
  string: string;

  constructor(string: string) {
    this.string = string;
  }
}

function testForSomeConstructor(ConstructorOfFunction: SomeConstructor) {
  return new ConstructorOfFunction('hello');
}

testForSomeConstructor(Hello);

// Generic Functions
function firstElement<Type>(arr: Type[]): Type {
  return arr[0];
}
const firstString = firstElement(['asd', 'lol', 'meh']);
const firstNumber = firstElement(Array.from({ length: 5 }, () => Math.ceil(Math.random() * 10)));
console.log(firstString, firstNumber);

// Inference
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
const parsed = map(['1', '2', '3'], (number) => parseInt(number, 10));
console.log(parsed);

// Constrains
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}
const longerArray = longest([1, 2], [1, 2, 3, 4, 5]);
const longerString = longest('Lorand', 'Andi');
console.log(longerArray, longerString);

// Working with Constrained Values
// -> be careful what to return
// function minimumLength<Type extends { length: number }>(
//   obj: Type,
//   minimum: number
// ): Type {
//   if (obj.length >= minimum) {
//     return obj;
//   }
//   return { length: minimum }; --->Type '{ length: number; }' is not assignable to type 'Type'.
//   '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
// }

// 'arr' gets value { length: 6 }
// const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
// console.log(arr.slice(0));

// Specifying Type Arguments
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
const combinedArr = combine<string | number>([1, 2, 3], ['hello']);
console.log(combinedArr);

// guidelines for writing good generic functions
// function firstElement<Type>(arr: Type[]) {
//   return arr[0]
// }
// vs
// function firstElement<Type extends any[]>(arr: Type) {
//   return arr[0];
// }
// const a = firstElement([1,2,3,4])

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean) {
  return arr.filter(func);
}
function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func): Type[] {
  return arr.filter(func);
}
const asdA = filter1([1, 2, 3], (item) => item > 2);
const asdB = filter2([1, 2, 3], (item) => item > 2);
console.log(asdA, asdB);

function greetingForeigner(s: string) {
  console.log(`Hello ${s}`);
}
greetingForeigner('Lorand');
// Optional parameters
function f(x = 10) {
  console.log(x);
}
f();
f(11);

// optional parameters in callbacks
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
myForEach([1, 2, 3], (a) => console.log(`element: ${a}`));
myForEach([1, 2, 3], (a, i) => console.log(`element: ${a}`, 'index: ', i));

myForEach([1, 2, 3], (a, i) => {
  if (i !== undefined) {
    console.log(i.toFixed());
  }
});

// function overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  }
  return new Date(mOrTimestamp);
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3) --> TS error: no overload expects 2 arguments
console.log(d1, `\n${d2}`);

function fn1(x: boolean): void;
function fn1(x: string): void;
function fn1(x: boolean | string) {
  return x;
}
fn1('asd');

function fn2(x: string): string;
function fn2(x: number): string;
function fn2(x: string | number) {
  return String(x);
}
fn2('meh');

// declaring this in a function
interface User {
  id: number;
  admin: boolean;
  becomeAdmin: () => void;
}
const user: User = {
  id: 123,
  admin: false,
  becomeAdmin() {
    this.admin = true;
  }
};

user.becomeAdmin();
// interface DB {
//   filterUsers(filter: (this: User) => boolean): User[]
// }
// const db = getDB();
// const admins = db.filterUsers(function lol(this: User){
//   return this.admin
// })
// console.log(admins)

// other types to know about
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function noop() {
  // eslint-disable-next-line no-useless-return
  return;
}
function safeParse(s: string): unknown {
  return JSON.parse(s);
}
const someRandomString = '{"result":true, "count":42}'; // -> but it could be 'asd' without {}
const randomObj = safeParse(someRandomString);
console.log(randomObj);
// function fail(msg: string): never {
//   throw new Error(msg)
// }
// fail('Huston, we have a problem')

// rest parameters and arguments

// other types
// eslint-disable-next-line arrow-body-style
const f1: () => void = () => {
  return true;
};

type voidFunc = () => void;
const f2: voidFunc = () => true;

// eslint-disable-next-line func-names
const f3: voidFunc = function () {
  return true;
};
console.log(f1(), f2(), f3());

const v1 = f1();

const v2 = f2();

const v3 = f3();

console.log(v1, v2, v3);
