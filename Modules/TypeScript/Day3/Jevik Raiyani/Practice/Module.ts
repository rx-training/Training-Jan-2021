
export function Emp(id: number,name:string):void{
    console.log(`From Emp Module  ${id}  ${name}`);
}   

export class StudentData{
    id: number;
    name:string;

    constructor(ID,Name){
        this.id = ID;
        this.name =Name;
    }

    Display(){
        console.log(`${this.id} and name is ${this.name} `);
    }

}
