import { Customer } from "./Customer";
import {newCustomers} from "./Customers";
import {BookedTable} from "./BookedTable";
import { BookTable } from "./BookTable";
import {Menu, MenuArray,order, IMenu} from "./Menu";

// Adding customer
newCustomers.push({CustomerId:3,CustomerName:'Jitednra',CustomerAddress :"asdd",CustomerIdentity : 'asdsd',CustomerContact : '7889858585'})
// To know all customer
newCustomers.forEach(element => {
    console.log(element);
});

var book : BookTable;

// to check tables availability
console.log(book.AvailableTable(BookedTable,10,'2020-05-01'));
// To check AvailableTables
console.log(book.AvailableTables(BookedTable, '2019-05-07'));
// To Book Table
console.log(book.BookTable(5,4,'2020-05-07'));

// for online order
//To know whole menu
MenuArray.forEach(element => {
    console.log(element);
});

//placing order
order.push({ItemId:3,ItemName:'k',Quantity:15});
 var mn : Menu;
 console.log(mn.PlaceOrder(order,2)); //  2 is customer id
