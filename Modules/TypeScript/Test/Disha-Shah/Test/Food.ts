import {IFood} from './IFood';

// Food class
export class Food implements IFood
{
    id: number;
    name: string;
    price: number;
    quantity: number;
    type: string;
    personsServed: number;

    constructor(id: number, name: string, price: number, quantity: number, type: string, personsServed: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.type = type;
        this.personsServed = personsServed;
    }
}