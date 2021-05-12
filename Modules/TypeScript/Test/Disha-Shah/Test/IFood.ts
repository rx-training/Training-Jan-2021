// Food interface
export interface IFood
{
    readonly id: number;  // readonly
    name: string;
    price: number;
    quantity: number;
    type: string;
    personsServed: number;
}