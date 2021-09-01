console.log('Hello World!');

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toLocaleTimeString()}!`);
}

let bar;
function foo() {
  return true;
}
if (foo()) {
  bar = 0;
}
console.log(bar);
console.log(new Date());

greet('Lorand', new Date());

const c = 11;

console.log(c * 2);
// equality narrowing
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toLowerCase();
    y.toUpperCase();
  } else {
    console.log(x, y);
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
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    return animal.swim();
  }
  return animal.fly();
}
const bird = {
  swim: () => console.log('I can swim')
};
const fish = {
  fly: () => console.log('I can fly')
};
const human = {
  swim: () => console.log('I can swim')
};
move(bird);
move(fish);
move(human);

// instanceof narrowing
function logTime(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toLowerCase());
  }
}
logTime(new Date());
logTime('today');
