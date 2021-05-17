import {BookTable} from  "./ClassTable";


var Data = new BookTable();
Data.AvailableTotal();
Data.AvailableByCountry("india");
Data.AvaliableByTime(2021,5,7,11,50);
Data.AvaliableDinningRoomWithTable("gangotari");

import {OrderData} from  "./OrderClass";
var Order = new OrderData("jevik","26/11 bhojarajpara","Gondal","India");
Order.GetMenu();
Order.OrderItemById(1);
