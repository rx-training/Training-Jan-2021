interface product {
    Id: number,
    Name: string,
    Quantity: number,
    Price?: number
}


enum Status {
    Success = 1,
    Declined = 0
}
//Products Daata
var Products: Array<product> = [
    { Id: 1, Name: "A", Quantity: 15, Price: 10 },
    { Id: 2, Name: "B", Quantity: 20, Price: 20 },
    { Id: 3, Name: "C", Quantity: 18, Price: 30 },
    { Id: 4, Name: "D", Quantity: 19, Price: 45 },
    { Id: 5, Name: "E", Quantity: 10, Price: 9 },
];
function checkAvailability(orderProduct: any): number {
    for(var element of Products) 
    {
        if (element['Id'] == orderProduct['Id']) {
            if (element['Quantity'] > orderProduct['Quantity']) {
                return Status.Success;
            }
            else {
                return Status.Declined;
            }
        }
    };
    return Status.Declined;
}
class shop {
    public customerName : string;
    constructor(name : string)
    {
        this.customerName = name;
    }
    Order(orderData: Array<product>) {
        for(var item of orderData)
        {
            if(checkAvailability(item) == 0)
            {
                return `Hello, ${this.customerName}, Quantity you are asking for product id :${item['Id']} is not available enough...`;
            }
        }
        var Bill: number = 0;
        orderData.forEach(element => {
            Products.forEach(productElement => {
                if (element['Id'] == productElement['Id']) {
                    productElement['Quantity'] -= element['Quantity'];
                    Bill += productElement['Price'] * element['Quantity'];
                }
            });
        });
        console.log('--------------------------------------------------------');

        console.log( `Hello ${this.customerName}, Your order is placed successfully and your total bill is ${Bill}`);

        console.log(`\nOrder Products and quantity:`);
        orderData.forEach(element=>{
            console.log(element);
        });
    }
    checkProducts()
    {
        var ProductLess5 = Products.filter(s => s.Quantity <= 5);
        if(ProductLess5.length == 0)
        {
            console.log(`Products are in stock..`);
        }
        else
        {
            console.log('--------------------------------------------------------');
            console.log('Products have less stock:');
            console.log();
            ProductLess5.forEach(element => {
                console.log(`${element['Name']} : ${[element['Quantity']]}`);
            });
        }
    }
    DisplayProducts()
    {
        console.log('--------------------------------------------------------');
        console.log(`products and its data....`);
        console.log();
        Products.forEach(element => {
            console.log(element);
        });
    }
}
// Order Data
var Orders: Array<product> = [
    { Id: 1, Name: "A", Quantity: 5 },
    { Id: 2, Name: "B", Quantity: 19 },
    { Id: 3, Name: "C", Quantity: 10 }
];
// Creating object of shop
var shopk = new shop('Namra');
shopk.Order(Orders);
shopk.checkProducts();
shopk.DisplayProducts();


