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
