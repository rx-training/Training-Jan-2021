console.log("----------------------------------------Generics----------------------------------------");

// Generic function
function display<T>(arg: T): T {
    //console.log(arg.length);   // error(.length is not available for Type T, bcoz T can be number also)
    return arg;
}

console.log(display<string>("Welcome"));
console.log(display<number>(100));
console.log(display(true));

function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
}

console.log(loggingIdentity([1, 2, 4]));
console.log(loggingIdentity(["hello", "hi", "heyy"]));

// Generic class
export class StudentInfo<T, U>
{
    private Id: T;
    private Name: U;

    setValue(id: T, name: U): void {
        this.Id = id;
        this.Name = name;
    }

    display(): void {
        console.log(`Id = ${this.Id}, Name = ${this.Name}`);
    }
}

let st = new StudentInfo<number, string>();
st.setValue(101, "Virat");
st.display();

let std = new StudentInfo<string, string>();
std.setValue("102", "Rohit");
std.display();


class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};

console.log(myGenericNumber.add(myGenericNumber.zeroValue, 10));

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
    return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// Generic interface as function type

// Particular method is Generic
interface IStudentInfo {
    <T, U>(id: T, name: U): void;
}

function studentData<T,U>(id: T, value: U): void {
    console.log(`Id = ${id}, \nName = ${value}`);
}

let Istd: IStudentInfo = studentData;
Istd(11, "Rohit Sharma");
Istd("12", "Rohit Sharma");

// Complete interface is generic
interface IStudentInfo1<T,U> {
    (id: T, name: U): void;
}

function studentData1<T, U>(id: T, value: U): void {
    console.log(`Id = ${id}, \nName = ${value}`);
}

let Istd1: IStudentInfo1<number, string> = studentData1;
Istd1(11, "Rohit Sharma");
let Istd2: IStudentInfo1<string, string> = studentData1;
Istd("12", "Rohit Sharma");

// Generic Constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity1<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}

console.log(loggingIdentity1({ length: 10, value: 3 }));

var str = "hello";
var len = str.length;
console.log(loggingIdentity1({ length: len, value: str }));

// Using Type parameters in Generic constraints
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, "a"));
// getProperty(x, "m");


//Modules
console.log();
console.log("------------------------------------------Modules-------------------------------------------");
export interface StringValidator {
    isAcceptable(s: string): boolean;
}

export { GenericNumber };
export { GenericNumber as GenNumber };