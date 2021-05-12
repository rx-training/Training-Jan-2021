import { ITablesAvailable } from './TablesAvailable';
import { IGuest } from './Guest';
import {tablesAvailable} from './TablesAvailable'
import {guest} from './Guest'
import {TConfimation} from './TokenConfirmation'
import {booking} from './OnlineBooking'
import {customer} from './HomeDeliveryCustomers'
import {acceptedOrder} from './AcceptOrders'
import {FItem} from './FoodItems'
import {VegFood} from './FoodItems'
import {NonVegFood} from './FoodItems'
import {order} from './HomeDliveryOrder'
import {resturant} from './Resturant'
import {HomeOrder} from './HomeDliveryOrder'
console.log("Welcome To Honest resturant situated at sola");
console.log("Enter your choice 1 for Resturant booking & 2 for Home Delivery");
var choice ;
choice = 2; //For Resturant Booking
console.log("You have selected First choice : Resturant Booking");
choice =1;//For Home Delivery Booking
console.log("You have selected First choice : Resturant Booking");
switch(choice)
{
     case 1 : 
        console.log("Resturants list as per the Counties");
        console.log(resturant);
        console.log("Guests List are:");
        console.log(guest);
        console.log("Tables available are:");
        console.log(tablesAvailable);
        console.log("Booking:");
        console.log(booking);
        console.log("Token Confirmation:");
        console.log(TConfimation);
        break;
     case 2 :
        console.log("Resturants list as per the Counties");
        console.log(resturant);
        console.log("Customer List are:");
        console.log(customer);
        console.log("Food Item List are as per category like vegetarian and non vegetarian:");
        console.log(FItem);
        console.log("Veg Food Items");
        console.log(VegFood);
        console.log("Non Veg Food Items");
        console.log(NonVegFood);
        console.log("Order:");
        console.log(order);
        console.log("Accepted Orders are:");
        console.log(acceptedOrder);
}