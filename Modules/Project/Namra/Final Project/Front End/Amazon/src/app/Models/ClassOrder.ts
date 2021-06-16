export interface ClassOrder {
    UserId: number;
    ProductId: number;
    Quantity: number;
}

export interface Order {
    orderId: number;
    userId: number;
    productId: number;
    quantity: number;
    orderedDate: Date;
    bill: number;
}

export interface PlacedOrder {
    placedOrderId: number;
    userId: number;
    productId: number;
    quantity: number;
    placedStatus: string;
    placedDate: Date;
    bill: number;
}

export interface OrderAll {
    orderId : number;
    userId : number;
    productId : number;
    quantity : number;
    orderedDate ?: Date;
    bill : number;
    sellerId : number;
}