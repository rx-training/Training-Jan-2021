import {ICustomer} from './ICustomer';

// Customer class
export class Customer implements ICustomer
{
    id: number
    name: string;
    age: number;
    address: string;
    contact: number;

    constructor(id: number, name: string, age: number, address: string, contact: number){
        this.id = id;
        this.name = name;
        this.age= age;
        this.address = address;
        this.contact = contact;
    }
}