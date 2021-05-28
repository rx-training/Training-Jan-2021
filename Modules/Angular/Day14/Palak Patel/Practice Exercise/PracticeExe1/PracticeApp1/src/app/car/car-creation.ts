import {Car, Engine, Tires} from './car';
export function simpleCar() {
    // Simple car with 4 cylinders and Flintstone tires.
    const car = new Car(new Engine(), new Tires());
    car.description = 'Simple';
    return car;
  }
  
  class Engine2 {
    constructor(public cylinders: number) { }
  }

  export function superCar() {
    
    const bigCylinders = 12;
    const car = new Car(new Engine2(bigCylinders), new Tires());
    car.description = 'Super';
    return car;
  }

  class MockEngine extends Engine { cylinders = 8; }
  class MockTires  extends Tires  { make = 'YokoGoodStone'; }

export function testCar() {

const car = new Car(new MockEngine(), new MockTires());
car.description = 'Test';
return car;
}
