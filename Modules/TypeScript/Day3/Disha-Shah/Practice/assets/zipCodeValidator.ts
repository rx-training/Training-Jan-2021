import { StringValidator } from "./practice";
import { GenNumber } from "./practice";
import { StudentInfo as Student } from "./practice";
import * as practice from "./practice";
import { StringValidator1 } from "./Validation";

export const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export default function (s: string) {
    return s.length === 5 && numberRegexp.test(s);
}

export class ZipCodeValidator1 implements StringValidator1 {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

var zipCode = new ZipCodeValidator();
console.log(zipCode.isAcceptable("12345"));

let std = new practice.StudentInfo<string, string>();
std.setValue("103", "Rohit");
std.display();

let std1 = new Student<string, string>();
std1.setValue("104", "Rohit");
std1.display();

let myGenericNumber = new GenNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};

console.log(myGenericNumber.add(myGenericNumber.zeroValue, 10));
