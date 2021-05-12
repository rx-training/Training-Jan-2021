import * as Interfaces from './Interfaces';

export class Branches {
    getAllBranches(): void {
        for (const branch of branchList) {
            console.log(`ID: ${branch.id}, Address: ${branch.address}, ${branch.city}, ${branch.state}`);
        }
    }

    static CheckIfBranchExists(branchId: number): boolean {
        var res = branchList.filter((branch, i, branchList)=>{return branch.id == branchId});
        if(res.length == 0) {
            return false;
        }
        return true;
    }
}

export var branchList: Interfaces.Branch[] = [
    {
        id:1,
        address:'S.G. Highway',
        city: 'Ahmedabad',
        state: 'Gujarat'
    },
    {
        id:2,
        address:'Borivalli',
        city: 'Mumbai',
        state: 'Maharastra'
    }
];

export class Tables {
    addTable(input: Interfaces.Table): void {
        if(!Branches.CheckIfBranchExists(input.branchId)) {
            console.log("invalid branch id.");
            return;
        }
        if(input.sittingCapacity < 1) {
            console.log("invalid sitting capacity.");
            return;
        }
        tableList.push(input);
    }

    getAllTables(branchId: number): void {
        if(!Branches.CheckIfBranchExists(branchId)) {
            console.log("invalid branch id.");
            return;
        }
        let res = tableList.filter((table, i, tableList) => { return table.branchId == branchId});
        if(res.length == 0){
            console.log('no tables found.');
            return;
        }

        for (const table of res) {
            console.log(`ID: ${table.id}, Branch Id: ${table.branchId}, Dining room type: ${table.diningRoom}, sitting capacity: ${table.sittingCapacity}`);
        }
    }

    GetTable(tableId: number): Interfaces.Table | null {
        var res = tableList.filter((table, i, tableList)=>{return table.id == tableId});
        if(res.length == 0) {
            return null;
        }
        return res[0];
    }

    static CheckIfTableExists(tableId: number): boolean {
        var res = tableList.filter((table, i, tableList)=>{return table.id == tableId});
        if(res.length == 0) {
            return false;
        }
        return true;
    }
}

export var tableList: Interfaces.Table[] = [
    {
        id:1,
        branchId:1,
        diningRoom:'AC',
        sittingCapacity:4
    },
    {
        id:2,
        branchId:2,
        diningRoom:'Open Terrace',
        sittingCapacity:2
    }
];

export var customerIdSeed = 3;

export class Customers {
    addCustomer(input: Interfaces.Customer): void {
        if(input.email.trim() == '' || input.contactNumber.trim() == '' || input.name.trim() == '') {
            console.log("invalid customer detail.");
            return;
        }
        customerList.push(input);
        customerIdSeed++;
    }

    viewAllCustomers(): void {
        for (const customer of customerList) {
            console.log(`ID: ${customer.id}, Name: ${customer.name}, Email: ${customer.email}, Address: ${customer.address}, Contact: ${customer.contactNumber}, Is Veg? ${customer.isVeg? "YES" : "NO"}`);
        }
    }
}

export var customerList: Interfaces.Customer[] = [
    {
        id:1,
        name: 'Milit',
        email: 'milit@gmail.com',
        address:"rajkot",
        contactNumber: '7878787878',
        isVeg:true
    },
    {
        id:2,
        name: 'John',
        email: 'john@gmail.com',
        address:"Mumbai",
        contactNumber: '4848484848',
        isVeg:false
    }
];

export class Bookings {
    createBooking(input: Interfaces.Booking): void {
        if(!Branches.CheckIfBranchExists(input.branchId)) {
            console.log("invalid branch id.");
            return;
        }

        var tables = new Tables();
        var table = tables.GetTable(input.tableId);

        // table id must be present in tables list
        if(table == null) {
            console.log("invalid table id.");
            return;
        }

        // table should be capable to serve all persons
        if(table.sittingCapacity < input.noOfPersons) {
            console.log(`Cannot book this table with ${input.noOfPersons} persons.`);
            return;
        }

        // table cant be book before less than 6 hours, and more than 1 month earlier.
        var currentDate = new Date();
        var diff = (+input.startTime - +currentDate)/(1000*60*60);
        if(currentDate.getFullYear() == input.startTime.getFullYear() && currentDate.getDate() == input.startTime.getDate() && currentDate.getMonth() == input.startTime.getMonth()) {
            if(diff < 6) {
                console.log('You have to book this table 6 hours earlier.');
                return;
            }
        }

        //
        if(diff/(24*30) > 1) {
            console.log('Booking date should be up to 1 month in advance.');
            return;
        }
        
        // table must be available in given time slot
        var bookingsDone = bookingList.filter((booking, i , bookingList) => {
            return (booking.tableId == input.tableId && ((booking.startTime > input.startTime && booking.startTime < input.EndTime) ||  (booking.startTime < input.startTime && booking.EndTime > input.startTime)))
        });
        if(bookingsDone.length != 0) {
            console.log('Table has been already booked in this slot.');
            return;
        }

        bookingList.push(input);
        bookingListSeed++;
        console.log('Table booked successfully.');
    }

    showBookings() {
        for (const booking of bookingList) {
            console.log(`ID: ${booking.id}, Branch Id: ${booking.branchId}, TableId: ${booking.tableId}, Persons: ${booking.noOfPersons}, booking time: From ${booking.startTime} To ${booking.EndTime}, Token : ${booking.bookingToken}`);
        }
    }
}

export var bookingListSeed = 2;

export var bookingList: Interfaces.Booking[] = [
    {
        id:1,
        tableId:1,
        branchId:1,
        customerId:1,
        startTime:new Date(2021,4,8,13,0,0),
        EndTime: new Date(2021,4,8,15,0,0),
        noOfPersons:3,
        bookingToken:bookingListSeed
    }
];

export class Menu 
{
    viewMenu() {
        for (const item of menuList) {
            console.log(`ID: ${item.id}, Item Name: ${item.itemName}, Price: ${item.price}, Is Veg?: ${item.isVeg ? "YES":"NO"}`);
        }
    }
}

export var menuList: Interfaces.MenuItem[] = [
    {
        id:1,
        itemName:'Pizza1',
        price:500,
        isVeg:true,
        serves:3
    },
    {
        id:2,
        itemName:'Pizza2',
        price:400,
        isVeg:true,
        serves:2
    },
    {
        id:3,
        itemName:'Omlet',
        price:90,
        isVeg:false,
        serves:1
    }
]

export var orderIdSeed = 1;

export class OrderItems implements Interfaces.OrderItem{
    item: [number, number];

    constructor(productId:number,quantity:number ) {
        this.item = [productId, quantity];
    }
}

export class Orders {

    createOrder(input: Interfaces.Order) {
        // item in order must be present in menu
        for (const item of input.orderItems) {
            let res = menuList.filter((menuItem, i, menuList) => {return menuItem.id == item.item[0]});
            if(res.length == 0) {
                console.log('invalid menu item selected. Cannot place order.');
                return;
            }
            res = [];
        }

        //setting expected delivery time (30 minutes)
        input.expectedDeliveryTime = new Date(input.time.getTime() + 30*60000);
        orderList.push(input);
        orderIdSeed++;
        console.log('order placed.');
        
    }

    viewOrder(id: number) {
        let results = orderList.filter((order, i, orderList) => {return order.orderId == id});
        if(results.length == 0) {
            console.log("no order found with this id.");
            return;
        }
        let res = results[0];
        console.log('---------------------------------');
        console.log(`OrderID: ${res.orderId}`);
        console.log(`Order Created on: ${res.time}`);
        console.log(`Expected Time of arrival: ${res.expectedDeliveryTime}`);
        console.log(`Order Items:`);
        var totalPrice = 0;
        for (const item of res.orderItems) {
            for (const menuItem of menuList) {
                if(menuItem.id == item.item[0]) {
                    console.log(`ID: ${menuItem.id}, Item Name: ${menuItem.itemName}, Price: ${menuItem.price}, Quantity: ${item.item[1]}, Is Veg?: ${menuItem.isVeg ? "YES":"NO"}`);
                    totalPrice += (menuItem.price * item.item[1]);
                }
            }
        }
        console.log(`Total price: ${totalPrice}`);
        console.log('---------------------------------');
    }
}

var orderList:Interfaces.Order[] = [];