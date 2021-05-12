import { AllBookings, Book } from "./Booking";
import { VegItems, Tables , NonVegItems, wholemenuItems} from "./Menu";
import {Customers} from './Customer';
import { Orders , ListoFOrder } from "./ordering";


console.log(`Welcome To restarutant`);


var newCustomer = new Customers("Tirth",1,2020202020,"Ahmedabad");

console.log(`All the tables are listed below`);
console.log(`Select table id you want to book as per list below`)
for(let table of Tables){
    console.log(table);
}
//while creating object you should pass the tableid you want to book and date for whcih you want to book

var book1 = new Book(null,newCustomer.CustomerId,2,new Date("2021-09-10"));

book1.Createbooking(book1);
//checking the all the bookings 
for(let bookings of AllBookings){
    console.log(bookings);
}

//online food ordering

//whole Veg ordering module
//first we see the list of menu items Which is for vegetarian
for(let item of VegItems){
    console.log(item)
}

//try to order an item

let order = new Orders(null,[4,5,1,2],1,null);


order.CreateOrder(order);


//Non Veg Module


for(let item of NonVegItems){
    console.log(item)
}

//try to order an item

let nonvegorder = new Orders(null,[6,7,8],1,null);


nonvegorder.CreateOrder(nonvegorder);
//list of all orders
for(let orders of ListoFOrder){
    console.log("---------------------------------------------------")
    console.log(`Custoemr id:${orders.CustomerId} has ordered items: ${orders.items} and bill amount is ${orders.BillAmount}`);
    console.log(`with token number ${orders.OrderId} will be deliverd in ${orders.Time}minute`);
    console.log("---------------------------------------------------")
}
let date1 :Date = new Date("2021-05-07");
let date2 :Date = new Date("2021-07-07");

let res  = date1.getDay() - date2.getDay();
console.log(res)