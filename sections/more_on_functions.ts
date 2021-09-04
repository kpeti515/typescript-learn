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
