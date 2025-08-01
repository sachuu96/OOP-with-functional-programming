// I want to understand OOP concepts better

// 1. Encapsulation - my entity is "animal". I have bundled together the properties related to my entity, inside one wrapper.
// I should not put my vehicle's engine capacity as property into this class

class Animal {
  // It is not mandatory to have contructor in a js class
  constructor({ name, sound }) {
    // no need to define name outside of constructor like java
    this.name = name;
    this.sound = sound;
  }

  speak() {
    console.log(`${this.name} makes ${this.sound}`);
  }
}

// 2. Inheritance - parent child relationship
// as long as "Dog" extends "Animal" - "Dog" can access everything "Animal" owns
class Dog extends Animal {
  // I don't have to write this constructor explicitly. can comment about below 2 lines and still it works
  constructor({ name, sound }) {
    super({ name, sound });
  }

  getSpeciality() {
    console.log("she got into an accident and now she can not walk");
  }
}

// child can access everything of parent
const myDog = new Dog({ name: "roxie", sound: "woof" });
myDog.speak();
myDog.getSpeciality();

const myNewDog = new Animal({ name: "bella", sound: "wooooof" });
myNewDog.speak();
// Parent can not access the function of a child. Therefore below line is not valid
// myNewDog.getSpeciality();

// 3. Abstraction - hiding complexity and exposing only what is needed.
class Car {
  constructor({ engineBulbeColor }) {
    this.engineBulbeColor = engineBulbeColor;
  }

  start() {
    const safeToStartEngine = this.checkEngineBulbe();
    safeToStartEngine && console.log("safe to start");
  }

  checkEngineBulbe() {
    console.log("ok dashboard lights are on now!");
    if (this.engineBulbeColor === "blue") {
      console.log("you have to wait until engine warms up before starting");
      return false;
    }
    return true;
  }
}

class Vitz extends Car {}

const vitzRS = new Car({ engineBulbeColor: "blue" });
vitzRS.start(); // user doesn't care how checkEngineBulbe() works



