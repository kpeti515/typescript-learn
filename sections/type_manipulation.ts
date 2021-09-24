/* eslint-disable max-classes-per-file */

// Generics
function identity<Type>(arg: Type): Type {
  return arg;
}
// let output = identity<string>('myString')
const genericsOutput = identity('myString');
console.log(genericsOutput);

// working with generic type variables
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log('length of arguments:', arg.length);
  return arg;
}
loggingIdentity([11, 2, 34, 5]);

// generic types
const myIdentity: <Type>(arg: Type) => Type = identity;
const yourIdentity: <Input>(arg: Input) => Input = identity;
const ourIdentity: { <Type>(arg: Type): Type } = identity;
interface GenericIdentifyFn1 {
  <Type>(arg: Type): Type;
}
interface GenericIdentifyFn2<Type> {
  (arg: Type): Type;
}
function newIdentity<Type>(arg: Type): Type {
  return arg;
}
const theirIdentity: GenericIdentifyFn1 = identity;
const anotherIdentity: GenericIdentifyFn2<number> = identity;
console.log(
  myIdentity([42, 6]),
  yourIdentity(['asd', 'lol']),
  ourIdentity(['meh', 2]),
  theirIdentity([{ ala: 'Lori' }]),
  newIdentity('\nunbelievable'),
  anotherIdentity(22)
);

// Generic Classes
class GenericNumber<NumType> {
  zeroValue: NumType;

  add: (x: NumType, y: NumType) => NumType;
}
const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function lol(x, y) {
  return x + y;
};
const stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = 'zero';
stringNumeric.add = function meh(x, y) {
  return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));

// Generic Constrains
interface LengthWise {
  length: number;
}
function loggingIdentityAgain<Type extends LengthWise>(arg: Type): Type {
  console.log('lets check the length again:', arg.length);
  return arg;
}
// loggingIdentityAgain(2) Argument of type
// 'number' is not assignable to parameter of type 'Lengthwise'.
loggingIdentityAgain({ length: 10, value: 3 });
loggingIdentityAgain([33, 12]);

// using type parameters in generic constrains
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
const simpleObject = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(simpleObject, 'a'));

// Using class types in generics
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function create<Type>(C: { new (): Type }): Type {
  return new C();
}

class BeeKeeper {
  hasMask: boolean = true;
}
class ZooKeeper {
  nameTag: string = 'Mike';
}
class Animal {
  numLegs: number = 4;
}
class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
function createInstance<A extends Animal>(C: new () => A): A {
  return new C();
}
const LionKeeperName = createInstance(Lion).keeper.nameTag;
const beeKeeperHasMask = createInstance(Bee).keeper.hasMask;
console.log(LionKeeperName, beeKeeperHasMask);

// keyof type operator
type anAnotherPoint = { x: number; y: number };
type PointParams = keyof anAnotherPoint;

function testPoint(keygen: PointParams): PointParams {
  return keygen;
}
testPoint('x');

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

function arrayishKeyExample(): A {
  return 22;
}
function mapishKeyExample(): M {
  return 'asd';
}
console.log(arrayishKeyExample(), mapishKeyExample());

// typeof type operator
const stringExample: string = 'hello';
const anotherString: typeof stringExample = '22';
console.log(anotherString);

type Predicate = (x: unknown) => boolean;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type KType = ReturnType<Predicate>;

function unbelievableCheat() {
  return { x: 'IDDQD', y: 'IDKFA' };
}
type Cheat = ReturnType<typeof unbelievableCheat>;
const hack: Cheat = { x: 'meh', y: 'it is fake' };
console.log(hack.x, hack.y);

// indexed array types
type Person = { age: number; name: string; alive: boolean };
type Age = Person['age'];
const age: Age = 22;
console.log(age);

type I1 = Person['age' | 'name'];
type I2 = Person[keyof Person];
type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];
const person1: I1 = 'age';
const person2: I2 = `doesn't`;
const person3: I3 = 'matter';
console.log(person1, person2, person3);

const myArray = [
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 24 },
  { name: 'Eve', age: 23 }
];
type Persons = typeof myArray[number];
type Age2 = Persons['age'];
const aladdin: Persons = { age: 22, name: 'Aladdin' };
aladdin.age = 23;
const zeroAge: Age2 = 0;
console.log(aladdin, zeroAge);

// conditional types
interface Animals {
  live(): void;
}
interface Dog extends Animals {
  woof(): void;
}
type Example1 = Dog extends Animals ? number : string;
type Example2 = RegExp extends Animals ? number : string;
const dogFart: Example1 = 1;
const dogWords: Example2 = 'woof,woof';
console.log(dogFart, dogWords);

interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}
// function createLabel(id: number): IdLabel;
// function createLabel(name: string): NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//   throw "unimplemented";
// }
type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  console.log(idOrName);
  throw new Error('idOrName');
}
// const testA = createLabel('typescript')
// testA.name = 'asd'
// const testB = createLabel(2.7)
// testB.id = 22
// const testC = createLabel(Math.random() > 0.5 ? "hello" : 42)
// testC.??? -> not known yet
// console.log(testA, testB, testC);

// conditional type constrains
