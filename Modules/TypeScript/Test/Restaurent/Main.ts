import {Book_Table_Resotrent} from "./Restorent";
import {Customer} from "./Customer";
import {Homedel} from "./homedeleivery";
var booking = new  Book_Table_Resotrent('Prya',7895461231,5,2000);
booking.GetData_Per_table();
booking.ListOfAvalible_dining_Table();
booking.NewBooking(2018, 0O5, 0O5, 17, 23, 42, 11);


var home = new Homedel(1,100,[],150);
home.time();


