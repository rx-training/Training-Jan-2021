export interface ICustomer 
{
    CustomerID : number;
    CustomerName : string;
}
export class Customers 
{
    CustomerID : number;
    CustomerName : string;
    CustomerPhoneNumber : number;
    CustomerAddress : string;
    constructor(CustomerID : number,CustomerName : string,CustomerPhoneNumber : number,CustomerAddress : string)
    {
        this.CustomerID = CustomerID;
        this.CustomerName = CustomerName;
        this.CustomerPhoneNumber = CustomerPhoneNumber;
        this.CustomerAddress = CustomerAddress;
    }
}
export var customer = [new Customers(1,"Bina",9999999988,"Xyz Appertment,Sola")];
