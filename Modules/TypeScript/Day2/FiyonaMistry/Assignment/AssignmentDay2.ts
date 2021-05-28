// There is a retail shop which need to manage the inventory, whenever some purchase is being made product quantity should be reduced, if quantity is less than 5 reorder request should be raised. Design an interface and classes for the same.

// Interface for Property
interface Inventory{

    productId : number;
    productName : string;
    productDescription : string;
    productCompany : string;
    productQty : number;
    productPrice : number;
    productExpiryDate? : Date;

}

// Interface for Methods
interface IRetailShop extends Inventory{

    productList(P : any);
    reorderRequest();

}

class RetailShop implements IRetailShop{

    productId: number;
    productName: string;
    productDescription: string;
    productCompany: string;
    productQty: number;
    // get productQty() {return this._productQty}
    productPrice: number;
    productExpiryDate?: Date;

    constructor(ID : number, Name : string, Decs : string, Comp : string, Qty : number, Price : number) {
        this.productId = ID;
        this.productName = Name;
        this.productDescription = Decs;
        this.productCompany = Comp;
        this.productQty = Qty;
        this.productPrice = Price;
    }

    productList(P : any) {
        return P;
    }

    reorderRequest() {
        if(this.productQty < 5){
            console.log("Time for re-ordering the product");
        }
    }

}

class Order extends RetailShop{

    constructor(ID : number, Name : string, Decs : string, Comp : string, Qty : number, Price : number){
        super(ID, Name, Decs, Comp, Qty, Price);
    }

}

var Product : RetailShop[] = [
    new RetailShop(1, "Laptop", "Slim Laptop", "Hp", 7, 50000 ),
    new RetailShop(2, "Smart Phone", "Latest Smart Phone", "Samsung", 6, 12000)
]; 

var order : Order[];
var order = [
    new Order(1, "Laptop", "Slim Laptop", "Hp", 1, 50000 ),
    new Order(2, "Smart Phone", "Latest Smart Phone", "Samsung", 2, 12000)
]; 

// Initial Product List
console.log("Product List : ");
for(var product of Product){
    console.log(product.productList(product));
}
console.log("-------------------------------------------------------------");

// Inital Order List 
console.log("Order List : ");
for(var ord of order){
    console.log(ord.productList(ord));
}
console.log("-------------------------------------------------------------");

// Product List after ordering the products
console.log("Product list after ordering the products : ");
for(var p of Product){
    for(var o of order){
        if(p.productId == o.productId){
            p.productQty -= o.productQty;
        }
    }
    p.reorderRequest();
    console.log(p.productList(p));
}