import {Person} from './Person'
export interface Customer extends Person{
    CustomerId:number;
    Address:string;

}
 export class Customers implements Customer{
    constructor(public Name:string,public CustomerId:number,public Contact:number,public Address:string){}
    
}