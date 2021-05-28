// importing required modules
import {Customer} from './Customer';
import {Table} from './Table'
import {Food} from './Food'
import { Order } from './Order';

// Add Customer information in a array
var customerArr: Customer[] = [];

var customer1 = new Customer(customerArr.length + 1, "Reena", 25, "Thaltej", 9845123789);
customerArr.push(customer1);

var customer2 = new Customer(customerArr.length + 1, "Meena", 22, "Sola", 9756459867);
customerArr.push(customer2);

console.log();
console.log("----------------------------Customers-----------------------------------");
console.log(customerArr);

// Add tables information
var tablesArr: Table[] = [];

var table1 = new Table(tablesArr.length + 1, "table1", 4);
tablesArr.push(table1);

var table2 = new Table(tablesArr.length + 1, "table2", 6);
tablesArr.push(table2);

var table3 = new Table(tablesArr.length + 1, "table3", 4);
tablesArr.push(table3);

console.log();
console.log("-------------------------------------Tables---------------------------");
console.log(tablesArr);

// Book a table by particular customer
console.log();
console.log("-----------------------------Book Table for Next 6 hours---------------------------------");
var currentDate: Date = new Date();
table1.bookTableForNextHours(customer1, currentDate);

// Table booked successfully verification
console.log();
console.log("--------------------------Table booked successfully verification----------------------------");
console.log(table1)

// Book a table by particular customer
console.log();
console.log("-----------------------------Book Table Next Month---------------------------------");
var currentDate: Date = new Date();
table2.bookTableForNextMonth(customer1, currentDate);

// Table booked successfully verification
console.log();
console.log("--------------------------Table booked successfully verification----------------------------");
console.log(table2)

// Add Food Information
var foodArr: Food[] = [];

var food1 = new Food(foodArr.length + 1, "Food1", 200, 50, "Vegetarian", 4);
foodArr.push(food1);

var food2 = new Food(foodArr.length + 1, "Food2", 250, 50, "Non-Vegetarian", 5);
foodArr.push(food2);

var food3 = new Food(foodArr.length + 1, "Food3", 300, 50, "Vegetarian", 4);
foodArr.push(food3);

console.log();
console.log("------------------------------------Menu----------------------------------");
console.log(foodArr);

// Place an order for food item
console.log();
console.log("--------------------------------------Place Order-------------------------------");
var newOrder = new Order();
var foodQtyArr : [Food, number][] = [[food1, 4], [food2, 3]];
newOrder.orderFood(foodQtyArr, customer1, currentDate);

