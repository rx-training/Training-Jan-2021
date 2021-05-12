import { ICustomer } from './HomeDeliveryCustomers';
interface IAcceptOrders extends ICustomer
{
    OrderID : number;
    Acceptted : string;
    TokenNumber : number;
}
class AcceptOrders implements IAcceptOrders
{
    CustomerID : number;
    CustomerName : string;
    OrderID : number;
    Acceptted : string;
    TokenNumber : number;
    OrderDeliverInTime : string;
    constructor(CustomerID : number,CustomerName : string,OrderID : number,Acceptted : string,TokenNumber : number,OrderDeliverInTime : string)
    {
        this.CustomerID = CustomerID;
        this.CustomerName = CustomerName;
        this.OrderID = OrderID;
        this.Acceptted = Acceptted;
        this.TokenNumber = TokenNumber;
        this.OrderDeliverInTime = OrderDeliverInTime;
    }
}
export var acceptedOrder = [new AcceptOrders(1,"Bina",1,"Accepted",10001,"60 minutes")];