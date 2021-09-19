function paintShape({ shape, xPos = 0, yPos = 0 }) {
  console.log(`Item ${JSON.stringify(shape)} xPos: ${xPos}, yPos ${yPos}`);
}
function getCircle() {
  return { kind: 'circle', radius: 20 };
}
function getRectangle() {
  return { kind: 'square', sideLength: 20 };
}
function getShape() {
  return Math.random() > 0.5 ? getCircle() : getRectangle();
}
const shape = getShape();
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, yPos: 100 });
paintShape({ shape, xPos: 100, yPos: 100 });
function dummy(obj) {
  console.log(`prop has the value: '${obj.prop}'.`);
  // obj.prop = "hello"-> will trigger error message
}
dummy({ prop: 'test' });
function visitForBirthday(home) {
  console.log(`Happy birthday ${home.resident.name}`);
  // home.resident.age += 1 -> TS doesn't show problem, es-lint no-param-reassign
}
visitForBirthday({ resident: { name: 'Lorand', age: 22 } });
const addressWithUnit = {
  street: 'asd',
  city: 'meh',
  country: 'lol',
  postalCode: 'eww',
  unit: 'kg'
};
console.log(addressWithUnit);
const colorfulCircle = {
  color: 'red',
  radius: 42
};
console.log(colorfulCircle);
const boxA = { contents: 'asd' };
const boxB = { contents: 'lol' };
console.log(boxA, boxB);
const appleBox = { contents: { name: 'A13', price: 999, releaseDate: new Date(2021, 8, 14) } };
console.log(appleBox);
function setContents(box, newContents) {
  // eslint-disable-next-line no-param-reassign
  box.contents = newContents;
  console.log(box.contents);
}
setContents(boxA, 'It magically works!');
// the Array type
function padString(value) {
  return value.map((str) => str.padStart(15, 'meh'));
}
const strArr = ['hello', 'traveler'];
const str1 = padString(strArr);
// eslint-disable-next-line no-array-constructor
const str2 = padString(new Array('what', 'the', 'heck'));
console.log(str1, str2);
// the ReadonlyArray type
function readInputArray(values) {
  // or values: readonly string[]
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
  // values.push('nextWord') Property 'push' does not exist on type 'readonly string[]'.
  console.log(copy);
}
const roArray = ['one', 'two', 'three', 'um', 'da', 'da', 'um', 'da', 'da'];
readInputArray(roArray);
function logPair(pair) {
  const a = pair[0];
  const b = pair[1];
  // const c = pair[2] --> Tuple type 'StringNumberPair' of length '2' has no element at index '2'.
  console.log(`The string is ${a} and the number is ${b}`);
}
logPair(['wonderful', 66]);
function destructExample(stringNumber) {
  const [inputString, numb] = stringNumber;
  console.log(inputString, numb);
}
destructExample(['I love you', 66]);
const testerArr = ['asd', 22];
console.log(testerArr.slice(0, 1));
function readCoordinate(coord) {
  console.log(`Provided coordinates are ${coord.length === 2 ? 'two' : 'three'} dimensional.`);
}
readCoordinate([11, 22]);
readCoordinate([11, 22, 33]);
const a = ['11', true, true, true, 22];
const b = ['22', 123, true, true, false];
const c = [true, false, false, true, 'Rest parameter in the first place?', 65];
console.log('a:', a, '\nb:', b, '\nc:', c);
// readonly tuple types
const point = [3, 4];
function distanceFromOrigin([x, y]) {
  console.log(`distance from origin: ${Math.sqrt(x ** 2 + y ** 2)} unit`);
}
distanceFromOrigin(point);
export {};
