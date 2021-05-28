import {Customer} from './Customer';

// Interface as Function type
interface ITableGenerator{
    (customer: Customer, currentDate: Date): void;
}

// Table interface
export interface ITable
{
    readonly id: number;    // readonly
    name: string;
    guests: number;

    bookTableForNextHours: ITableGenerator;
    bookTableForNextMonth: ITableGenerator;
}

