export interface ClassOrder
{
    UserId : number;
    ProductId : number;
    Quantity : number;
}

export interface Order
{
    orderId :  number;
    userId :  number;
    productId :  number;
    quantity :  number;
    orderedDate : Date;
    bill :  number;
}