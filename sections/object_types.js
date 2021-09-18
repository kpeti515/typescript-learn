// import { Shape } from './narrowing'
// greet already declared in hello.ts
// function greet(person: { name: string; age: number }) {
//   return `Hello ${person.name}`;
// }
// console.log(greet({ name: 'lol', age: 22 }));
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
// interfaces vs intersections
// generic object types
// something went wrong-helloo
