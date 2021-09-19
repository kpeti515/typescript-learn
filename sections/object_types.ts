import type { Shape } from './narrowing';
// greet already declared in hello.ts
// function greet(person: { name: string; age: number }) {
//   return `Hello ${person.name}`;
// }
// console.log(greet({ name: 'lol', age: 22 }));

// property modifiers
interface PaintOptions {
  shape: Shape;
  xPos?: number;
  yPos?: number;
}
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log(`Item ${JSON.stringify(shape)} xPos: ${xPos}, yPos ${yPos}`);
}
function getCircle(): Shape {
  return { kind: 'circle', radius: 20 };
}
function getRectangle(): Shape {
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

// readonly properties
interface someType {
  readonly prop: string;
}
function dummy(obj: someType) {
  console.log(`prop has the value: '${obj.prop}'.`);
  // obj.prop = "hello"-> will trigger error message
}
dummy({ prop: 'test' });

interface Home {
  readonly resident: { name: string; age: number };
}
function visitForBirthday(home: Home) {
  console.log(`Happy birthday ${home.resident.name}`);
  // home.resident.age += 1 -> TS doesn't show problem, es-lint no-param-reassign
}
visitForBirthday({ resident: { name: 'Lorand', age: 22 } });

// extending types
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
interface AddressWithUnit extends BasicAddress {
  unit: string;
}
const addressWithUnit: AddressWithUnit = {
  street: 'asd',
  city: 'meh',
  country: 'lol',
  postalCode: 'eww',
  unit: 'kg'
};
console.log(addressWithUnit);

interface Colorful {
  color: string;
}
interface CircleWithRadius {
  radius: number;
}

// interface ColorfulCircle extends Colorful, CircleWithRadius { }
type ColorfulCircle = Colorful & CircleWithRadius;
const colorfulCircle: ColorfulCircle = {
  color: 'red',
  radius: 42
};
console.log(colorfulCircle);

// interfaces vs intersections

// generic object types
interface Box<Type> {
  contents: Type;
}
const boxA: Box<string> = { contents: 'asd' };
const boxB: Box<string> = { contents: 'lol' };
console.log(boxA, boxB);
interface Apple {
  price: number;
  name: string;
  releaseDate: Date;
}
const appleBox: Box<Apple> = { contents: { name: 'A13', price: 999, releaseDate: new Date(2021, 8, 14) } };
console.log(appleBox);

function setContents<Type>(box: Box<Type>, newContents: Type) {
  // eslint-disable-next-line no-param-reassign
  box.contents = newContents;
  console.log(box.contents);
}
setContents(boxA, 'It magically works!');

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

// the Array type
function padString(value: Array<string>) {
  return value.map((str) => str.padStart(15, 'meh'));
}
const strArr: string[] = ['hello', 'traveler'];
const str1 = padString(strArr);
// eslint-disable-next-line no-array-constructor
const str2 = padString(new Array('what', 'the', 'heck'));
console.log(str1, str2);

// the ReadonlyArray type
function readInputArray(values: ReadonlyArray<string>) {
  // or values: readonly string[]
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
  // values.push('nextWord') Property 'push' does not exist on type 'readonly string[]'.
  console.log(copy);
}
const roArray: readonly string[] = ['one', 'two', 'three', 'um', 'da', 'da', 'um', 'da', 'da'];
readInputArray(roArray);

// function modifyInputArray(values: string[]) {
//   const copy = values.slice()
//   console.log(`The first value is ${values[0]}`)
//   values.push('nextWord')
//   console.log(copy);
// }
// modifyInputArray(roArray) --> Argument of type 'readonly string[]' is not assignable to parameter of type 'string[]'.  The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'

// tuple types
type StringNumberPair = [string, number];
function logPair(pair: StringNumberPair) {
  const a = pair[0];
  const b = pair[1];
  // const c = pair[2] --> Tuple type 'StringNumberPair' of length '2' has no element at index '2'.
  console.log(`The string is ${a} and the number is ${b}`);
}
logPair(['wonderful', 66]);

function destructExample(stringNumber: StringNumberPair) {
  const [inputString, numb] = stringNumber;
  console.log(inputString, numb);
}
destructExample(['I love you', 66]);

interface StringNumberPairs {
  length: 2;
  0: string;
  1: number;
  slice(start?: number, end?: number): Array<string | number>;
}
const testerArr: StringNumberPairs = ['asd', 22];
console.log(testerArr.slice(0, 1));

type Either2dOr3d = [number, number, number?];
function readCoordinate(coord: Either2dOr3d) {
  console.log(`Provided coordinates are ${coord.length === 2 ? 'two' : 'three'} dimensional.`);
}
readCoordinate([11, 22]);
readCoordinate([11, 22, 33]);

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
const a: StringBooleansNumber = ['11', true, true, true, 22];
const b: StringNumberBooleans = ['22', 123, true, true, false];
const c: BooleansStringNumber = [true, false, false, true, 'Rest parameter in the first place?', 65];
console.log('a:', a, '\nb:', b, '\nc:', c);

// readonly tuple types
const point = [3, 4] as const;

function distanceFromOrigin([x, y]: readonly [number, number]) {
  console.log(`distance from origin: ${Math.sqrt(x ** 2 + y ** 2)} unit`);
}
distanceFromOrigin(point);
