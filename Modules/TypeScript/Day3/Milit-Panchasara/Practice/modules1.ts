import {Demo2} from './modules2';

class Demo<T1, T2> {
    prop1: T1;
    prop2: T2;
    constructor(value1:T1, value2:T2) {
        this.prop1 = value1;
        this.prop2 = value2;
    }

    display() {
        console.log(this.prop1, ' ', this.prop2);
    }
}

export { Demo, Demo2 };
