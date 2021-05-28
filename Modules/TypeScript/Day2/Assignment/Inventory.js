var Inventorys = [
    { ProdId: 1, ProdName: 'keybord', Price: 270, Prodque: 10 },
    { ProdId: 2, ProdName: 'mouse', Price: 150, Prodque: 7 },
    { ProdId: 3, ProdName: 'mousepad', Price: 50, Prodque: 12 },
    { ProdId: 4, ProdName: 'moniter', Price: 1270, Prodque: 9 }
];
var Inventory = /** @class */ (function () {
    function Inventory(ID, proname, price, quo) {
        this.ProdId = ID;
        this.ProdName = proname;
        this.Price = price;
        this.Prodque = quo;
    }
    ;
    // new product add inventory
    Inventory.prototype.insertproduct = function () {
        var prodavaliable = 0;
        var newproduct = { ProdId: this.ProdId, ProdName: this.ProdName, Price: this.Price, Prodque: this.Prodque };
        for (var _i = 0, Inventorys_1 = Inventorys; _i < Inventorys_1.length; _i++) {
            var newpro = Inventorys_1[_i];
            if (newpro.ProdId == newproduct.ProdId || newpro.ProdName == newproduct.ProdName) {
                prodavaliable += 1;
            }
        }
        if (prodavaliable == 0) {
            Inventorys.push(newproduct);
        }
    };
    return Inventory;
}());
var Manages = /** @class */ (function () {
    function Manages() {
    }
    //GET ALL Product 
    Manages.prototype.Showproducts = function () {
        console.log("----------------- Product -----------------");
        for (var _i = 0, Inventorys_2 = Inventorys; _i < Inventorys_2.length; _i++) {
            var product = Inventorys_2[_i];
            console.log("Product Name is \"" + product.ProdName + "\" and that price is \"" + product.Price + "\"");
        }
        console.log("-------------------------------------------");
        return Inventorys;
    };
    Manages.prototype.Orderproducts = function (productname, quo) {
        console.log("----------------- Order -----------------");
        for (var _i = 0, Inventorys_3 = Inventorys; _i < Inventorys_3.length; _i++) {
            var product = Inventorys_3[_i];
            if (product.ProdName == productname) {
                if (product.Prodque >= quo) {
                    var totalprice = product.Price * quo;
                    console.log("Order is sucessfully " + totalprice);
                    product.Quontity = product.Prodque - quo;
                    break;
                }
                else {
                    console.log("---------------------Enter product is  higher quntity is " + quo + " So enter lessthen this quontity ----------------------");
                    console.log("Product Name is \"" + product.ProdName + "\" and that price is \"" + product.Price + " and quontity is " + product.Prodque + "\"");
                    break;
                }
            }
            else {
                console.log("---------------------Enter product is not avalibale----------------------");
                break;
            }
            //     console.log(`Product Name is "${product.ProdName}" and that price is "${product.Price}"`);
        }
        console.log("-------------------------------------------");
    };
    return Manages;
}());
var inven = new Inventory(5, "leptop", 25000, 7);
inven.insertproduct();
var Manage = new Manages();
Manage.Showproducts();
Manage.Orderproducts("keybord", 8);
Manage.Showproducts();
