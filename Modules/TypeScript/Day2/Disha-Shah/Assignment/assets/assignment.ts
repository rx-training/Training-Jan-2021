enum Quantity {
    minQty = 5
}

interface IProduct {
    readonly productId: number;
    readonly name: string;
    qty: number;
    price: number;
}

class Product implements IProduct {
    productId: number;
    name: string;
    qty: number;
    price: number;
    
    constructor(id: number, name: string, qty: number, price: number) {
        this.productId = id;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }

    getProduct(): void {
        console.log(`ProductId = ${this.productId}, Name = ${this.name}, Quantity = ${this.qty}, Price = ${this.price}`);
    }

    buyProduct(qtyToBuy: number): void{
        if (qtyToBuy > this.qty) {
            console.log("Quantity is greater than available quantity");
            this.getProduct();
        }
        else if (qtyToBuy < Quantity.minQty) {
            console.log("Quantity is less than 5. Please reorder");
            this.getProduct();
        }
        else {
            this.qty -= qtyToBuy;
            console.log("successfully placed order");
            this.getProduct();
        }
    }
}

var prod1 = new Product(1, "Cutter", 50, 100);
prod1.buyProduct(200);
prod1.buyProduct(2);
prod1.buyProduct(10);
