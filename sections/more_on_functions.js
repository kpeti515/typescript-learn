function greeter(fn) {
  fn('Hello world');
}
function printToConsole(s) {
  console.log(s);
}
greeter(printToConsole);
function dummyFunction(fn) {
  console.log(`${fn.description} returned ${fn(6)}`);
}
function dummyParameter(magicNumber) {
  return magicNumber === 6;
}
dummyParameter.description = 'Understanding call signatures';
dummyFunction(dummyParameter);
class Hello {
  constructor(string) {
    this.string = string;
  }
}
function testForSomeConstructor(ConstructorOfFunction) {
  return new ConstructorOfFunction('hello');
}
testForSomeConstructor(Hello);
// Generic Functions
function firstElement(arr) {
  return arr[0];
}
const firstString = firstElement(['asd', 'lol', 'meh']);
const firstNumber = firstElement(Array.from({ length: 5 }, () => Math.ceil(Math.random() * 10)));
console.log(firstString, firstNumber);
