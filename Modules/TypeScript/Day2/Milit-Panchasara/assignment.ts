interface InverntoryInterface {
    productId:number;
    productName:string;
    price:number;
    quantity:number;
}

interface OrderItemsInterface {
    item: [number, number];
}

interface OrdersInterface {
    orderId:number;
    orderItems:Array<OrderItemsInterface>;
}

class Inventory implements InverntoryInterface
{
    productId: number;
    productName: string;
    price: number;
    quantity: number;

    constructor(productId: number, productName: string, price: number, quantity: number) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }

    viewInventory() {
        console.log(`Product ID: ${this.productId}, Product Name: ${this.productName}, Price: ${this.price}, Quantity: ${this.quantity}`);
    }

    checkStock() {
        if(this.quantity < 5) {
            this.sendOrderToFillInventory(this.productId, 10);
        }
    }

    private sendOrderToFillInventory(productId: number, reOrderQuantity: number):void {
        console.log(`Reordered the product with id ${productId}`);
        for (var index in inventory) {
            if(inventory[index].productId == productId) {
                inventory[index].quantity += reOrderQuantity;
                break;
            }
        }
    }
}

class OrderItem implements OrderItemsInterface{
    item: [number, number];

    constructor(productId:number,quantity:number ) {
        this.item = [productId, quantity];
    }
}

class Order implements OrdersInterface {
    orderId: number;
    orderItems: OrderItemsInterface[];
    isPlaced: boolean;

    constructor(orderId: number, orderItems:OrderItem[]) {
        this.orderId = orderId;
        this.orderItems = orderItems;
        orderIdSeed++;
        this.isPlaced = this.checkValidity();
        if(this.isPlaced)
            this.deductQuantityFromInventory();
    }

    viewOrder() {
        console.log('---------------------------------');
        console.log(`OrderID: ${this.orderId}`);
        console.log(`Order Items:`);
        for (const item of this.orderItems) {
            console.log(`Product ID: ${item.item[0]}, Quantity: ${item.item[1]}`);
        }
        console.log('---------------------------------');
    }

    checkValidity():boolean {
        let invalidOrder = false;
        let itemFound = false;

        for (const item of this.orderItems) {
            itemFound = false;
            for(let index in inventory) {
                if(inventory[index].productId == item.item[0]) {
                    if(inventory[index].quantity < item.item[1])
                    {
                        invalidOrder = true;
                        break;
                    }
                    itemFound = true;
                }
            }
            if(!itemFound || invalidOrder) {
                return false;
            }
        }
        return true;
    }

    deductQuantityFromInventory() {
        for (const item of this.orderItems) {
            for(let index in inventory) {
                if(inventory[index].productId == item.item[0]) {
                    inventory[index].quantity -= item.item[1];
                }
            }
        }
    }
}

// seeders for IDs
var productIdSeed = 5;
var orderIdSeed = 1;

// initial inventory
var inventory:Inventory[] = [
    new Inventory(1, 'toy1', 500, 20),
    new Inventory(2, 'toy2', 600, 10),
    new Inventory(3, 'toy3', 700, 15),
    new Inventory(4, 'toy4', 800, 18)
];

// checking initial stock and displaying inventory items
for (const product of inventory) {
    product.checkStock();
    product.viewInventory();
}

// new list with 3 order items
var orderItems:OrderItem[] = [
    new OrderItem(1, 5),
    new OrderItem(2, 7),
    new OrderItem(3, 1)
];

// new order with 3 order items
var order:Order = new Order(orderIdSeed, orderItems);
//displaying order
order.viewOrder();
// if order is valid: isPlaced = true
console.log(`Is order placed: ${order.isPlaced}`);

// checking stock after order and displaying inventory items
for (const product of inventory) {
    product.checkStock();
    product.viewInventory();
}

// new order with 3 order items ,order item quantity exceeding available inventory quantity (order won't be placed)
var orderItems2:OrderItem[] = [
    new OrderItem(1, 5),
    new OrderItem(2, 7),
    new OrderItem(3, 20)
];

// new order with 3 order items
var order2:Order = new Order(orderIdSeed, orderItems2);
//displaying order
order2.viewOrder();
// if order is invalid: isPlaced = false
console.log(`Is order placed: ${order2.isPlaced}`);

// checking stock after order and displaying inventory items
for (const product of inventory) {
    product.checkStock();
    product.viewInventory();
}
