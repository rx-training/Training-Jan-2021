interface Item{
    ItemId:number;
    ItemName:string;
    ItemCategory:string
    ItemPrice:number;
    ItemQnty:number;
}
interface DiningRoom{
    Name:string;
    Type:string;
}
interface table extends DiningRoom{
    TableId:number;
    TableCapacity:number;
    TableType:string;
}

class Menu{
    ShowAllVegItems(){};
    OrderAItem(){};

}

var VegItems : Item[] = [];
VegItems.push(
    {ItemId:1,ItemName:"Samosa",ItemPrice:50,ItemQnty:100,ItemCategory:"Veg"},
    {ItemId:2,ItemName:"Vadapav",ItemPrice:40,ItemQnty:70,ItemCategory:"Veg"},
    {ItemId:3,ItemName:"Dabeli",ItemPrice:60,ItemQnty:45,ItemCategory:"Veg"},
    {ItemId:4,ItemName:"Burger",ItemPrice:50,ItemQnty:100,ItemCategory:"Veg"},
    {ItemId:5,ItemName:"Sandwich",ItemPrice:100,ItemQnty:40,ItemCategory:"Veg"}
)

var NonVegItems :Item[] =[];
NonVegItems.push(
    {ItemId:6,ItemName:"Chicken",ItemPrice:50,ItemQnty:100,ItemCategory:"NonVeg"},
    {ItemId:7,ItemName:"FriedEggs",ItemPrice:40,ItemQnty:70,ItemCategory:"NonVeg"},
    {ItemId:8,ItemName:"kheema",ItemPrice:60,ItemQnty:45,ItemCategory:"NonVeg"},
    {ItemId:9,ItemName:"omlet",ItemPrice:50,ItemQnty:100,ItemCategory:"NonVeg"},
    {ItemId:10,ItemName:"FriedRice",ItemPrice:100,ItemQnty:40,ItemCategory:"NonVeg"}
)
var wholemenuItems :Item[]=[];
wholemenuItems.push({ItemId:1,ItemName:"Samosa",ItemPrice:50,ItemQnty:100,ItemCategory:"Veg"},
{ItemId:2,ItemName:"Vadapav",ItemPrice:40,ItemQnty:70,ItemCategory:"Veg"},
{ItemId:3,ItemName:"Dabeli",ItemPrice:60,ItemQnty:45,ItemCategory:"Veg"},
{ItemId:4,ItemName:"Burger",ItemPrice:50,ItemQnty:100,ItemCategory:"Veg"},
{ItemId:5,ItemName:"Sandwich",ItemPrice:100,ItemQnty:40,ItemCategory:"Veg"},
{ItemId:6,ItemName:"Chicken",ItemPrice:50,ItemQnty:100,ItemCategory:"NonVeg"},
{ItemId:7,ItemName:"FriedEggs",ItemPrice:40,ItemQnty:70,ItemCategory:"NonVeg"},
{ItemId:8,ItemName:"kheema",ItemPrice:60,ItemQnty:45,ItemCategory:"NonVeg"},
{ItemId:9,ItemName:"omlet",ItemPrice:50,ItemQnty:100,ItemCategory:"NonVeg"},
{ItemId:10,ItemName:"FriedRice",ItemPrice:100,ItemQnty:40,ItemCategory:"NonVeg"})

var Tables :table[]= [];
Tables.push({
    Name:"Super" ,Type:"luxurious",TableId:1,TableCapacity:30,TableType:"S"},
    {Name:"Normal" ,Type:"Rich",TableId:2,TableCapacity:20,TableType:"A"},
    {Name:"Normal" ,Type:"Affordable",TableId:3,TableCapacity:10,TableType:"B"},
    {Name:"Super" ,Type:"VIP",TableId:4,TableCapacity:25,TableType:"S"},
    {Name:"Super" ,Type:"Affordable",TableId:5,TableCapacity:15,TableType:"A"},
    {Name:"Super" ,Type:"V-VIP",TableId:6,TableCapacity:15,TableType:"S"
});

export{Item,DiningRoom,table,Menu,VegItems,Tables,NonVegItems,wholemenuItems};