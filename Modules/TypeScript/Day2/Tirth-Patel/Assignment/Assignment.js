//There is a retail shop which need to manage the inventory,
// whenever some purchase is being made product quantity should 
///be reduced, if quanity is less than 5 reorder request should 
//be raised.
var allProd = [];
allProd.push({ Name: "Rice", Quantity: 40 }, { Name: "Wheat", Quantity: 100 }, { Name: "Toor-Dal", Quantity: 40 }, { Name: "Chana-Dal", Quantity: 50 });
var Customer = /** @class */ (function () {
    function Customer(cname) {
        this.cname = cname;
    }
    Customer.prototype.Purchase = function (item, quanity) {
        for (var _i = 0, allProd_1 = allProd; _i < allProd_1.length; _i++) {
            var obj = allProd_1[_i];
            if (obj.Name == item) {
                obj.Quantity = obj.Quantity - quanity;
                if (obj.Quantity < 5) {
                    console.log("please Reorder " + obj.Name + " before we run Out");
                }
            }
        }
    };
    Customer.prototype.dispplay = function () {
        console.log(this.cname + " purchased " + this.OrderItem);
    };
    return Customer;
}());
var c1 = new Customer("tirth");
c1.Purchase("Rice", 20);
c1.Purchase("Rice", 16);
c1.dispplay();
// class Rice implements Prodcut{
//     Name:string;
//     Quantity:number;
//     constructor(
//         Name:string,
//         Quantity:number,
//     ){
//         this.Name = Name;
//         this.Quantity = Quantity;
//     }
//     CheckQuantity(Qnty:number):void{
//         if(Qnty <5){
//             console.log(`Plaease ReOrder ${this.Name} Before We run Out`);
//         }
//     }
// }
// class Customers implements Customer{
//     Cname : string;
//     OrderItem:Prodcut[];
//     constructor(cname:string , orderItem:Prodcut[]){
//         this.Cname = cname;
//         this.OrderItem = orderItem;
//     }
// }
// let c1  : Customer;
// c1 = new Customers("tirth",[Rice]);
