namespace calc{
    export class Calculate{
        num1:number;
        num2:number;

        constructor(n1,n2){
            this.num1 =n1;
            this.num2 = n2;
        }
        sum():number{
            return this.num1+this.num2;
        }
        sub():number{
            return this.num1-this.num2;
        }
        mul():number{
            return this.num1*this.num2;
        }
        div():number{
            return this.num1/this.num2;
        }
        mod():number{
            return this.num1%this.num2;
        }
    }
}