namespace Hotel
{
 export interface HotelData
{
    HotelId:number;
    HotelName:string;
    HotelAddress:string;
    HotelCity:string;
    HotelCountry:string;
    HotelRating:number;

}

export var hoteldata:HotelData[]=
[
    {
        HotelId:1,
        HotelAddress:"S.G Highway",
        HotelCountry:"India",
        HotelCity:"Ahmedabad",
        HotelName:"ABC Hotel",
        HotelRating:4.5/5
    },
    {
        HotelId:2,
        HotelAddress:"Onterio",
        HotelCountry:"Canada",
        HotelCity:"TOrento",
        HotelName:"DEF Hotel",
        HotelRating:3.5/5
    },
    {
        HotelId:3,
        HotelAddress:"Califonia",
        HotelCountry:"America",
        HotelCity:"Califonia",
        HotelName:"GHI Hotel",
        HotelRating:4.6/5
    },
    {
        HotelId:4,
        HotelAddress:"Surat",
        HotelCountry:"India",
        HotelCity:"",
        HotelName:"GHI Hotel",
        HotelRating:3.5/5
    }


]

}