/// <reference path ="Hotel.ts" />
/// <reference path ="Table.ts" />
/// <reference path ="vagetarianRecipy.ts" />
/// <reference path ="NonvagetatianRecipy.ts" />




class HotelManagement {
    SearchHotel(City: string): void {
        let data = Hotel.hoteldata.filter(x => x.HotelCity == City)[0];

        if (data != null) {
            let data1 = Table.tabledata.filter(x => x.hotelId == data.HotelId)[0];
            console.log(`Hotel Name :- ${data.HotelName}`);
            console.log(`HotelAddress :- ${data.HotelAddress}`);
            console.log(` HOtel Cty :-  ${data.HotelCity}`);
            console.log(`Hotel Country :- ${data.HotelCountry}`);
            console.log(`HOtel Rating ${data.HotelRating}`);
            console.log(`Gust Per Table:-${data1.GustPerTable}`);
            console.log(`Available Table:-${data1.TableAvailable}`);

        }
        else {
            console.log("Sorry Hotel And Room is Not Avalilable")
        }

    }
    bookingTable(HotelName: string, NumberofPerson: number): void {
        var data = Hotel.hoteldata.filter(x => x.HotelName == HotelName)[0];
        if (data != null) {
            var data1 = Table.tabledata.filter(x => x.hotelId == data.HotelId)[0];
            var avalibility: number = data1.GustPerTable;
            var flag=false;
            for (var i = 0; i < NumberofPerson; i++) {

                if (data1.GustPerTable <= NumberofPerson  ) {
                    data1.TableAvailable = (data1.TableAvailable) - 1;
                    NumberofPerson = NumberofPerson - data1.TableAvailable;
                    flag=true;
                }
                else 
                 {
                   if( NumberofPerson>0)
                    {
                    data1.TableAvailable = (data1.TableAvailable) - 1;
                    }
                    else
                    {
                    
                    break;
                    }
                }
                
            }
            if(flag==true)
            {
                console.log(`Success fully Booked Table And Your Security Code :-${Math.random().toString(36).substring(7)} `);
            }
            else
            {
                console.log("Sorry Table is Not Available");
            }

        }

           



    }
        showItem(Choise:string):void
           {
               if(Choise=="veg")
               {
                    for (const iterator of vagetarianRecipy.vegItem)
                    {
                        console.log(`ItemName :- ${iterator.vagItemName}`);
                        console.log(`Price :- ${iterator.vegitemPrice}`);
                        console.log("======================================");
                    }
               }
               if(Choise=="nonveg")
               {
                for (const iterator of nonvagetarianRecipy.nonvegItem)
                {
                    console.log(`ItemName :- ${iterator.vagItemName}`);
                    console.log(`Price :- ${iterator.vegitemPrice}`);
                    console.log("======================================");
                }

               }
           } 

           orderItem(FullName:string,Adddress:string, ItemName:string,Qnt:number):void
           {
               try
               {
               let data1=vagetarianRecipy.vegItem.filter(x=>x.vagItemName==ItemName)[0];
               let data2=vagetarianRecipy.vegItem.filter(x=>x.vagItemName==ItemName)[0];
               var text=0.20;
                if(data1 !=null || data2!==null)
                {
                    console.log(`Name : - ${FullName}`);
                    console.log(`Address :- ${Adddress}`);
                    console.log(`Item Order :- ${ItemName}`);
                    console.log(`ItemQuantity :- ${Qnt}`);
                    if(data1.vagItemName==ItemName)
                    {
                    console.log(`Totel Pay :- ${(data1.vegitemPrice+(data1.vegitemPrice*text))*Qnt}`);
                    
                }
                    else if(data2.vagItemName==ItemName)
                    {
                    console.log(`Totel Pay :- ${(data2.vegitemPrice+(data2.vegitemPrice*text))*Qnt}`);
                    }
                    else
                    {
                        console.log("Sorry Item is Not Available");
                    }



                    console.log(`Success fully Booked Order And Your Security Code :-${Math.random().toString(36).substring(7)} `);
                    var date:Date=new Date();

                        console.log(`Our Person  Are Arrived in ${date.getMinutes()+120} Minute`);
                    
                }
            }
            catch
            {
                console.log("Item  is Not Available");
            }
                

                
           }

}


var htdata = new HotelManagement();
console.log("==============Searching Hotel=======================");
htdata.SearchHotel("Ahmedabad");
console.log("=====================Get Booking And Security Code ==============================");
htdata.bookingTable("ABC Hotel", 5);
console.log("==============================Now Check Available Booking=========================");
htdata.SearchHotel("Ahmedabad");
console.log("==============================Show Menu============================");
htdata.showItem("veg");
htdata.showItem("nonveg");
console.log("===========================Order Item =============================");
htdata.orderItem("Bhargav Prajapati","Ahmedabad","Pasta",3);
console.log("=================================Item is Not Available========================");
htdata.orderItem("Bhargav Prajapati","Ahmedabad","asdssrseref",3);
