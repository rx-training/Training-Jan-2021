interface LabeledValue{
    label?:  string;
}

function printLabel (labeledObj : LabeledValue): {label : string}{
    let newMessage = {label:"Good Morning!!!"};
    if(labeledObj.label){
        newMessage.label=labeledObj.label;
    }
    return newMessage;
}

let myObj = printLabel({});
let myObj1 = printLabel({label:"Happy Birthday!!!"})
console.log(myObj);
console.log(myObj1)

class Person {
    name: string;
    constructor(theName:string){
        this.name=theName;
    }
    message(){
        console.log(`Hello, I am ${this.name}`);
    }
}

let person1 = new Person("Mike");
person1.message();
let persons = [new Person("John"), new Person("Linda")];
persons.push(person1);
for (var p of persons){
    p.message();
}

class Employee extends Person{
    Salary : Number;
    constructor(theName: string,salary:number){
        super(theName);
        this.Salary=salary;
    }

    display(){
        let PF = Number(this.Salary) * 0.12;
        console.log(`${this.name}'s Salary is ${this.Salary} and his contribution to the PF is ${PF}`);
    }
}

let employee1 = new Employee("Mike",2000);
employee1.message();
employee1.display();