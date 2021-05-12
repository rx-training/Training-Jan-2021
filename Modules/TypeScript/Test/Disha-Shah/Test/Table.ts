import {Customer} from './Customer';
import {ITable} from './ITable';

// Table class
export class Table implements ITable
{
    id: number;
    name: string;
    guests: number;
    private isBooked : boolean = false;
    private bookingDate: Date = new Date();

    constructor(id: number, name: string, guests: number){
        this.id = id;
        this.name = name;
        this.guests= guests;
    }

    bookTableForNextHours(customer: Customer, currentDate: Date): void{
        this.isBooked = true;
        const token = Math.floor(Math.random() * 1000);
        this.bookingDate.setHours(currentDate.getHours() + 6);
        console.log();
        console.log(`Hello Mr./Ms. ${customer.name}, Your table "${this.name}" of ${this.guests} people has been successfully booked for ${this.bookingDate}. Your token is: ${token}`);
    }

    bookTableForNextMonth(customer: Customer, currentDate: Date): void{
        this.isBooked = true;
        const token = Math.floor(Math.random() * 1000);
        this.bookingDate.setMonth(currentDate.getMonth() + 1);
        console.log();
        console.log(`Hello Mr./Ms. ${customer.name}, Your table "${this.name}" of ${this.guests} people has been successfully booked for ${this.bookingDate}. Your token is: ${token}`);
    }
}