import {Food} from './Food';
import {Customer} from './Customer';

// Interface as function type
interface IOrderGenerator{
    (foodQty: [Food, number][], customer: Customer, currentDate : Date): void;
}

// IOrder interface
export interface IOrder{
    foodQty: [Food, number][];
    customer: Customer;

    orderFood: IOrderGenerator;
}