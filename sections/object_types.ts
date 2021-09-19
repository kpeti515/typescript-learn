import * as narrowing from './narrowing';
// greet already declared in hello.ts
// function greet(person: { name: string; age: number }) {
//   return `Hello ${person.name}`;
// }
// console.log(greet({ name: 'lol', age: 22 }));

// property modifiers
interface PaintOptions {
  shape: narrowing.Shape;
  xPos?: number;
  yPos?: number;
}
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log(`Item ${JSON.stringify(shape)} xPos: ${xPos}, yPos ${yPos}`);
}
function getCircle(): narrowing.Shape {
  return { kind: 'circle', radius: 20 };
}
function getRectangle(): narrowing.Shape {
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
// something went wrong-helloo
