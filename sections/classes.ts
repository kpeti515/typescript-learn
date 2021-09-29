/* eslint-disable max-classes-per-file */
class PointTest1 {
  x: number;

  y: number;
}
const pt1 = new PointTest1();
pt1.x = 0;
pt1.y = 0;

class PointTest2 {
  x = 0;

  y = 0;
}
const pt2 = new PointTest2();
pt2.x = 1;
console.log(pt2.x, pt2.y);

// class BadGreeter {
//   name: string;
//   -->Property 'name' has no initializer and is not definitely assigned in the constructor.
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GoodGreeter {
  name: string;

  constructor() {
    this.name = 'Hello';
  }
}
// class OKGreeter {
//   Not initialized, but no error
//   name!: string;
// }

class Greeter {
  readonly name: string = 'world';

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
  // err() {
  //   this.name = 'not ok'
  //   Cannot assign to 'name' because it is a read-only property.
  // }
}
const test211 = new Greeter();
// test211.name = "also not ok";
// Cannot assign to 'name' because it is a read-only property.
console.log(test211.name);

// Getters / Setters
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class C {
  _length = 0;

  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  set length(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._length = value;
  }
}

// class heritage
interface Pingable {
  ping(): void;
}

class Sonar implements Pingable {
  // eslint-disable-next-line class-methods-use-this
  ping() {
    console.log('ping!');
  }
}
const sonar = new Sonar();
sonar.ping();

class Base {
  // eslint-disable-next-line class-methods-use-this
  greet() {
    console.log('Hi world!');
  }
}
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello ${name.toUpperCase()}`);
    }
  }
}
const d = new Derived();
d.greet();
d.greet('reader');

class Base2 {
  name = 'base';

  constructor() {
    console.log(`My name is ${this.name}`);
  }
}

class Derived2 extends Base2 {
  name = 'derived';
}

// Prints "base", not "derived"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const d22 = new Derived2();
