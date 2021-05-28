import {IOrder} from './IOrder';
import {Food} from './Food';
import {Customer} from './Customer';

// Order class
export class Order implements IOrder
{
    foodQty: [Food, number][];
    customer: Customer;
    private minDeliveryTime: Date = new Date();
    private maxDeliveryTime: Date = new Date();
    private validServiceTime: Date = new Date();

    // method to order food
    orderFood(foodQty: [Food, number][], customer: Customer, currentDate : Date): void{
        // Minimum time for delivery
        this.minDeliveryTime.setMinutes(currentDate.getMinutes() + 60);

        // Maximum time for delivery
        this.maxDeliveryTime.setMinutes(currentDate.getMinutes() + 120);

        // Maximum time for returning order
        this.validServiceTime.setHours(currentDate.getHours() + 24);

        // generate token
        const token = Math.floor(Math.random() * 1000);

        var foodArr : [Food, number][] = [];

        for(var foodIndex in foodQty) {
            if(foodQty[foodIndex][0].quantity < foodQty[foodIndex][1])
            {
                console.log();
                console.log("Sorry, Food is not available");
            }
            else
            {
                foodQty[foodIndex][0].quantity = foodQty[foodIndex][0].quantity - foodQty[foodIndex][1];
                console.log();
                console.log(`Hello ${customer.name}, You order for ${foodQty[foodIndex][0].name} is successfully placed. Order will reach you between ${this.minDeliveryTime} to ${this.maxDeliveryTime}. Food delivery service is valid upto ${this.validServiceTime}, you can return food in between this time. Your token is ${token}`);
                foodArr.push(foodQty[foodIndex]);
            }
        }

        // Call Generate bill method
        this.generateBill(foodArr);
    }

    // method to generate bill
    private generateBill(foodArr: [Food, number][]): void{
        console.log(`------------------Your Bill-----------------------`);
        let finaltotal = 0;
        for(var foodIndex in foodArr) {
            let total = foodArr[foodIndex][1] * foodArr[foodIndex][0].price;
            finaltotal += total;
            console.log();
            console.log(`Food Item: ${foodArr[foodIndex][0].name}          Quantity: ${foodArr[foodIndex][1]}              Total: ${total}`);
        }
        var amountToPay = finaltotal + finaltotal*0.1;
        console.log();
        console.log(`Amount to be paid = ${amountToPay}`)
    }
}
