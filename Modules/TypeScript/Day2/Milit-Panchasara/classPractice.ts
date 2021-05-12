class classPractice 
{
    id:number;
    name:string;
    address: string;

    constructor(id:number, name:string, address:string)
    {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    display()
    {
        return `${this.id} | ${this.name} | ${this.address}`;
    }
}

var p1 = new classPractice(1,"milit","rajkot");
var p2 = new classPractice(2,"xyz","rajkot");

console.log(p1.display());

var arr: classPractice[] = [];

arr.push(p1);
arr.push(p2);
for (const person of arr) {
    console.log(person.display());
}

class Student extends classPractice
{
    constructor(id:number, name:string, address:string)
    {
        super(id, name, address); // parent class constructor
    }
}

abstract class Base {
    abstract getName(): string;
  
    printName() {
      console.log("Hello, " + this.getName());
    }
  }
  
//   const b = new Base(); // cannot create instance of ab. class

  class Derived extends Base {
    getName() {
      return "world";
    }
  }
  
  const d = new Derived();
  d.printName();

  class Try {
      x:number;
      display() {
          console.log(this.x);
      }
  }

  var xx:Try = new Try();
  xx.x = 1;
  xx.display();