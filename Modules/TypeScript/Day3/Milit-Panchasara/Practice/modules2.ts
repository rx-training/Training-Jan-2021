export class Demo2 {
    prop1: number;
    prop2: string;
    constructor(value1:number, value2:string) {
        this.prop1 = value1;
        this.prop2 = value2;
    }

    display() {
        console.log(this.prop1, ' ', this.prop2);
    }
}