import {Irestorent} from  "./Interface/Irestorent";
var Restorent_Book:any = [
    {
        ID:1,
        Customer_name:"Niraj sapra",
        Customer_Phoneno:756756430,
        No_Customer_Person:4,
        book_date : '2021-05-21',
        booking_Tokan : 2000
    },
    {
        ID:2,
        Customer_name:"Nita Matheta",
        Customer_Phoneno:7568548567,
        No_Customer_Person:6,
        book_date : '2021-05-22',
        booking_Tokan : 2000
    } 
];
export class Book_Table_Resotrent implements Irestorent{
    restorent_Book_table_Id:number;
    restorent_Name:string;
    restorent_table_book_datetime:Date;
    restornet_table_book_Customer_Name:string;
    restornet_table_book_Customer_Phoneno:number;
    restornet_table_book_No_Customer_Phoneno:number;
    restorent_total_book_Table :number;
    restornet_table_book_No_Customer_token:number;
    constructor(CName:string,Cphone:number,Noofperson:number ,Customer_token:number){
        this.restornet_table_book_Customer_Name = CName;
        this.restornet_table_book_Customer_Phoneno = Cphone;
        this.restornet_table_book_No_Customer_Phoneno = Noofperson;
        this.restornet_table_book_No_Customer_token=Customer_token;
        this.restorent_total_book_Table = 10;
    }
    //b
    ListOfAvalible_dining_Table(){
        console.log(Restorent_Book.length);        
        if(Restorent_Book.length==0){
            console.log("This time Avaliable Table Number It is 10.");
        }
        else{
            console.log("---------------List of Book---------------");
            var emptytable = this.restorent_total_book_Table - Restorent_Book.length;
            console.log(`Number of Available  Table list is ${emptytable}`);
            console.log("---------------List of Book---------------")
        }
    }
//c
    GetData_Per_table(){
        console.log("---------------Name of All Cusomer data---------------");
            for(var list of Restorent_Book){
                console.log(`Customer Name : ${list.Customer_name} and tabel no is ${list.ID} book date is ${list.book_date}`);
            }
            console.log("---------------------------------------------------")
    }
    //d
    NewBooking(year:number,month:number,date:number,hour:number, minute:number, second:number, millisecond:number)
        {
        var data = {ID: Restorent_Book.lenght +1,
            Customer_name:this.restornet_table_book_Customer_Name,
            Customer_Phoneno:this.restornet_table_book_Customer_Phoneno,
            No_Customer_Person:this.restornet_table_book_No_Customer_Phoneno,
            book_date : Dates(year,month,date,hour, minute, second, millisecond),
            booking_Tokan:this.restornet_table_book_No_Customer_token
        }
        Restorent_Book.push(data);   
        }
        
        gettotaldata
}
function Dates(year,month,date,hour, minute, second, millisecond){
   var on = new Date();
    let dates: Date =new Date(year,month,date,hour, minute, second, millisecond); 
  
        return dates;
}

