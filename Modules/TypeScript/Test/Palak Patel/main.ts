import {Customers, Tables, Menu} from "./classes"

export var OCustomers:Customers[]=[
    new Customers(1,"John Doe",1234567890,"London"),
    new Customers(2,"abd",1234564543,"Paris"),
    new Customers(3,"abgd",9834723574,"Vadodara")
];

export var OTables = new Tables();
export var OMenu = new Menu();

OCustomers[0].ListOfTables();
OCustomers[1].TableBooking(2,new Date(2017, 4, 4, 17, 19, 0, 0));
OCustomers[2].placeOrder([{ItemName:"Dal Makhni", Quantity:2},{ItemName:"Jeera Rice", Quantity:2}],"veg",new Date(2021, 5, 7, 17, 50, 0, 0));
OCustomers[0].WatchMenu();
OCustomers[1].removeBooking(2);
OCustomers[2].orderPlaced(new Date(2021, 5, 7, 16, 50, 0, 0));
OTables.addTable({
    TableID:11,
    CapacityOfTable:2,
    Status:false,
});

OMenu.addMenuItem({
    ItemName:"Butter Chicken",
    ItemPrice:120,
    Servings:2,
    FoodType:"non veg"
})