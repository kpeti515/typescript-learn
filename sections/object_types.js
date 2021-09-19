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
export {};
