import { StringValidator1 } from "./Validation";
const lettersRegexp = /^[A-Za-z]+$/;
export class LettersOnlyValidator implements StringValidator1 {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}