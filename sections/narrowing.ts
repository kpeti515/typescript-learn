// narrowing
function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(' ') + input;
  }
  return padding + input;
}
padLeft(11, 'asd');

function printAll(strings: string | string[] | null) {
  if (strings && typeof strings === 'object') {
    console.log(`Array items: ${strings.join(', ')}`);
  } else {
    console.log(`The string which you provided: ${strings}`);
  }
}
printAll(null);
printAll('MEH');
printAll(['I', 'love', 'pancakes']);

function multiplyAll(values: number[] | undefined, factor = 2): number[] | void {
  if (!values) {
    return console.log(`Input was ${values}`);
  }
  return values.map((value) => value * factor);
}
const mathNumbers = undefined;
multiplyAll(mathNumbers);
multiplyAll([22, 3, 432, 34]);

// equality narrowing
function example(ex: string | number, y: string | boolean) {
  if (ex === y) {
    ex.toLowerCase();
    y.toUpperCase();
  } else {
    console.log(ex, y);
  }
}
example('asd', 'lol');

interface Container {
  value: number | null | undefined;
}
function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value);
    const multipliedValue = container.value * factor;
    console.log(multipliedValue);
  }
}
multiplyValue({ value: 22 }, 3);

// the in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim: () => void; fly: () => void };

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    return animal.swim();
  }
  return animal.fly();
}
const bird = {
  fly: () => console.log('I can swim')
};
const fish = {
  swim: () => console.log('I can fly')
};
const human = {
  swim: () => console.log('I can swim')
};
move(bird);
move(fish);
move(human);

// instanceof narrowing
function logTime(time: Date | string) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time.toLowerCase());
  }
}
logTime(new Date());
logTime('today');

// Assignments
let asd = Math.random() < 0.5 ? 10 : 'hello world';
asd = 1;
console.log(asd);
asd = 'I love to dance!';
console.log(asd);

// Control flow analysis

// Using type predicates
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
isFish(fish);
function getSmallPet(): Fish | Bird {
  return Math.random() > 0.5 ? bird : fish;
}

const pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (Bird | Fish)[] = Array.from({ length: 3 }, () => getSmallPet());
const underWater1: Fish[] = zoo.filter(isFish);
console.log(underWater1);

// Discriminated unions + Exhaustiveness checking
interface Circle {
  kind: 'circle';
  radius: number;
}
interface Square {
  kind: 'square';
  sideLength: number;
}
export type Shape = Circle | Square;
function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      // eslint-disable-next-line no-case-declarations
      const exhaustiveCheck: never = shape;
      return exhaustiveCheck;
  }
}
getArea({ kind: 'circle', radius: 20 });
getArea({ kind: 'square', sideLength: 20 });
