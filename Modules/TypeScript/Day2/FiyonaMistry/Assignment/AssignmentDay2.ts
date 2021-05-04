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
    purchaseProduct(P : any);
    reorderRequest();

}

class RetailShop implements IRetailShop{

    productId: number;
    productName: string;
    productDescription: string;
    productCompany: string;
    productQty: number;
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
        console.log("Product List : ");
        // this.purchaseProduct(P);
        return P;
    }

    purchaseProduct(P : any) {
        this.productQty -= 1;
        console.log("After purchasing the product : ");
        this.reorderRequest();
        return P;
    }

    reorderRequest() {
        if(this.productQty < 5){
            console.log("Time for re-ordering the product");
        }
    }

}

var Product : RetailShop[] = [
    new RetailShop(1, "Laptop", "Slim Laptop", "Hp", 7, 50000 ),
    new RetailShop(2, "Smart Phone", "Latest Smart Phone", "Samsung", 4, 12000)
];  

for(var p of Product){
    console.log(p.productList(p));
    console.log(p.purchaseProduct(p));
    console.log("");
}
