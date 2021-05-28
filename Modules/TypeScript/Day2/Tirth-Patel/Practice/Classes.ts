class Greeter{
    greeteing:string
    constructor (message:string){
        this.greeteing = message;
    }
    greet(){
        return "Helllo," + this.greeteing;
    }
    
}
let greetr = new Greeter("Tirth");
console.log(greetr.greet());

//inheritance
class Animal {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    move(distanceInMeters: number = 0) {
      console.log(`This ${this.name} moved ${distanceInMeters}m.`);
    }
  }
  
  class Dog extends Animal {
      constructor(name:string){
          super(name);
      }
    bark() {
      console.log("Woof! Woof!");
    }
  }
  class Horse extends Animal {
    constructor(name: string) {
      super(name);
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }}
  
  const dog = new Dog("Tomy");
  dog.bark();
  dog.move(10);
  dog.bark();
  let tom: Animal = new Horse("Tommy the Palomino");
  tom.move(34);

  class Animals {
    private name: string;//another waty is  #name: string; 
    
    constructor(theName: string) {
      this.name = theName;
    }
  }
  
 // new Animals("Cat").#name;
//   Property '#name' is not accessible 
//   outside class 'Animal' because it has a private identifier.

class Person {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  class Employee extends Person {
    private department: string;
  
    constructor(name: string, department: string) {
      super(name);
      this.department = department;
    }
  
    public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
  }
  
  let howard = new Employee("Howard", "Sales");
  console.log(howard.getElevatorPitch());
 // console.log(howard.name);

 class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
  
    constructor(theName: string) {
      this.name = theName;
    }
  }
  
  let dad = new Octopus("Man with the 8 strong legs");
  //dad.name = "Man with the 3-piece suit";


  //class as an interface
  class Point {
    x: number;
    y: number;
  }
  
  interface Point3d extends Point {
    z: number;
  }
  
  let point3d: Point3d = { x: 1, y: 2, z: 3 };
  var x_ =12;