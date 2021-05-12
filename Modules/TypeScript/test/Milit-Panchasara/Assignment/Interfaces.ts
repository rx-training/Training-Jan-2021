export interface Branch {
    id: number,
    address: string,
    city: string,
    state: string
}

export interface Table {
    id: number,
    branchId: number,
    diningRoom: string,
    sittingCapacity: number
}

export interface Customer {
    id: number,
    name: string,
    email: string,
    address: string,
    contactNumber: string,
    isVeg: boolean
}

export interface Booking {
    id: number,
    tableId: number,
    branchId: number,
    customerId: number,
    startTime: Date,
    EndTime:Date,
    noOfPersons: number,
    bookingToken: number
}

export interface OrderItem {
    item: [number, number];
}

export interface Order {
    orderId:number;
    orderItems:Array<OrderItem>;
    time: Date;
    expectedDeliveryTime?: Date;
}

export interface MenuItem {
    id:number;
    itemName:string;
    price:number;
    isVeg:boolean;
    serves: number;
}