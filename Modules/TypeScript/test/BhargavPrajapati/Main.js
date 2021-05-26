var Hotel;
(function (Hotel) {
    Hotel.hoteldata = [
        {
            HotelId: 1,
            HotelAddress: "S.G Highway",
            HotelCountry: "India",
            HotelCity: "Ahmedabad",
            HotelName: "ABC Hotel",
            HotelRating: 4.5 / 5
        },
        {
            HotelId: 2,
            HotelAddress: "Onterio",
            HotelCountry: "Canada",
            HotelCity: "TOrento",
            HotelName: "DEF Hotel",
            HotelRating: 3.5 / 5
        },
        {
            HotelId: 3,
            HotelAddress: "Califonia",
            HotelCountry: "America",
            HotelCity: "Califonia",
            HotelName: "GHI Hotel",
            HotelRating: 4.6 / 5
        },
        {
            HotelId: 4,
            HotelAddress: "Surat",
            HotelCountry: "India",
            HotelCity: "",
            HotelName: "GHI Hotel",
            HotelRating: 3.5 / 5
        }
    ];
})(Hotel || (Hotel = {}));
var Table;
(function (Table) {
    Table.tabledata = [
        {
            hotelId: 1,
            TableAvailable: 20,
            GustPerTable: 5
        },
        {
            hotelId: 2,
            TableAvailable: 50,
            GustPerTable: 8
        },
        {
            hotelId: 3,
            TableAvailable: 30,
            GustPerTable: 7
        },
        {
            hotelId: 4,
            TableAvailable: 30,
            GustPerTable: 7
        }
    ];
})(Table || (Table = {}));
var vagetarianRecipy;
(function (vagetarianRecipy) {
    vagetarianRecipy.vegItem = [
        { vagItemName: "Pasta", vagitemid: 1, vegitemPrice: 150 },
        { vagItemName: "Pizza", vagitemid: 2, vegitemPrice: 250 },
        { vagItemName: "Burgur", vagitemid: 3, vegitemPrice: 350 }
    ];
})(vagetarianRecipy || (vagetarianRecipy = {}));
var nonvagetarianRecipy;
(function (nonvagetarianRecipy) {
    nonvagetarianRecipy.nonvegItem = [
        { vagItemName: "Chikan", vagitemid: 1, vegitemPrice: 150 },
        { vagItemName: "ChikanBiriyani", vagitemid: 2, vegitemPrice: 250 },
        { vagItemName: "Egg", vagitemid: 3, vegitemPrice: 350 }
    ];
})(nonvagetarianRecipy || (nonvagetarianRecipy = {}));
/// <reference path ="Hotel.ts" />
/// <reference path ="Table.ts" />
/// <reference path ="vagetarianRecipy.ts" />
/// <reference path ="NonvagetatianRecipy.ts" />
class HotelManagement {
    SearchHotel(City) {
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
            console.log("Sorry Hotel And Room is Not Avalilable");
        }
    }
    bookingTable(HotelName, NumberofPerson) {
        var data = Hotel.hoteldata.filter(x => x.HotelName == HotelName)[0];
        if (data != null) {
            var data1 = Table.tabledata.filter(x => x.hotelId == data.HotelId)[0];
            var avalibility = data1.GustPerTable;
            var flag = false;
            for (var i = 0; i < NumberofPerson; i++) {
                if (data1.GustPerTable <= NumberofPerson) {
                    data1.TableAvailable = (data1.TableAvailable) - 1;
                    NumberofPerson = NumberofPerson - data1.TableAvailable;
                    flag = true;
                }
                else {
                    if (NumberofPerson > 0) {
                        data1.TableAvailable = (data1.TableAvailable) - 1;
                    }
                    else {
                        break;
                    }
                }
            }
            if (flag == true) {
                console.log(`Success fully Booked Table And Your Security Code :-${Math.random().toString(36).substring(7)} `);
            }
            else {
                console.log("Sorry Table is Not Available");
            }
        }
    }
    showItem(Choise) {
        if (Choise == "veg") {
            for (const iterator of vagetarianRecipy.vegItem) {
                console.log(`ItemName :- ${iterator.vagItemName}`);
                console.log(`Price :- ${iterator.vegitemPrice}`);
                console.log("======================================");
            }
        }
        if (Choise == "nonveg") {
            for (const iterator of nonvagetarianRecipy.nonvegItem) {
                console.log(`ItemName :- ${iterator.vagItemName}`);
                console.log(`Price :- ${iterator.vegitemPrice}`);
                console.log("======================================");
            }
        }
    }
    orderItem(FullName, Adddress, ItemName, Qnt) {
        try {
            let data1 = vagetarianRecipy.vegItem.filter(x => x.vagItemName == ItemName)[0];
            let data2 = vagetarianRecipy.vegItem.filter(x => x.vagItemName == ItemName)[0];
            var text = 0.20;
            if (data1 != null || data2 !== null) {
                console.log(`Name : - ${FullName}`);
                console.log(`Address :- ${Adddress}`);
                console.log(`Item Order :- ${ItemName}`);
                console.log(`ItemQuantity :- ${Qnt}`);
                if (data1.vagItemName == ItemName) {
                    console.log(`Totel Pay :- ${(data1.vegitemPrice + (data1.vegitemPrice * text)) * Qnt}`);
                }
                else if (data2.vagItemName == ItemName) {
                    console.log(`Totel Pay :- ${(data2.vegitemPrice + (data2.vegitemPrice * text)) * Qnt}`);
                }
                else {
                    console.log("Sorry Item is Not Available");
                }
                console.log(`Success fully Booked Order And Your Security Code :-${Math.random().toString(36).substring(7)} `);
                var date = new Date();
                console.log(`Our Person  Are Arrived in ${date.getMinutes() + 120} Minute`);
            }
        }
        catch (_a) {
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
htdata.orderItem("Bhargav Prajapati", "Ahmedabad", "Pasta", 3);
console.log("=================================Item is Not Available========================");
htdata.orderItem("Bhargav Prajapati", "Ahmedabad", "asdssrseref", 3);
