// Enum
enum Quantity {
    minQty = 5
}

// Interface as function type
interface OrderGenerator {
    (qtyToBuy: number) : void;
}

// Interface
interface IProduct {
    readonly productId: number;   // readonly
    readonly name: string;    // readonly
    qty: number;
    price: number;
    buyProduct: OrderGenerator;
    addProduct(): void;
}

// Class implement interface
class Product implements IProduct {
    productId: number;
    name: string;
    qty: number;
    price: number;

    // Constructor
    constructor(id: number, name: string, qty: number, price: number) {
        this.productId = id;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

    // Get information of product
    getProduct(): void {
        console.log(`Available: ProductId = ${this.productId}, Name = ${this.name}, Quantity = ${this.qty}, Price = ${this.price}`);
    }

    // Buy a product
    buyProduct(qtyToBuy: number): void{
        if (qtyToBuy > this.qty) {
            console.log("Quantity is greater than available quantity");
            this.getProduct();
        }
        else {
            this.qty -= qtyToBuy;
            console.log("successfully placed order");
            this.getProduct();

            if (this.qty < Quantity.minQty) {
                this.reOrder(50);
            }
        }
    }

    // Add new product
    addProduct(): void {
        var product: IProduct = new Product(this.productId, this.name, this.qty, this.price);
        prodArray.push(product);
    }

    // Reorder product
    reOrder(reOrderQty: number): void {
        this.qty += reOrderQty;
        console.log(`Re-Order for ${reOrderQty} pieces of ${this.name} is successfully placed`);
        console.log(`After Delivery: Name: ${this.name}, Total Quantity Available: ${this.qty}`);
    }
}

let prod1: IProduct = new Product(1, "Cutter", 50, 100);
let prod2: IProduct = new Product(2, "Drill", 50, 100);
let prod3: IProduct = new Product(3, "Saw", 12, 100);
let prodArray: IProduct[] = [];
prodArray.push(prod1);
prodArray.push(prod2);
prodArray.push(prod3);

console.log("----------------------------Products List------------------------------------")
console.log(prodArray);
console.log();

console.log("----------------------------------Product Order--------------------------------");
console.log();
prodArray[0].buyProduct(200);
console.log();
prodArray[1].buyProduct(10);
console.log();
prodArray[2].buyProduct(10);
console.log();
prodArray[2].buyProduct(10);
console.log();

console.log("-----------------------------------Add product----------------------------------");
let prod4: IProduct = new Product(4, "Saw", 20, 100);
prod4.addProduct()
console.log("------------------------------------New List------------------------------------");
console.log(prodArray);