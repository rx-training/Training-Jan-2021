namespace Table
{
  export  interface TableData
    {
        hotelId:number;
        TableAvailable:number;
        GustPerTable:number;
    }

   export var tabledata:TableData[]=
    [
        {
            hotelId:1,
            TableAvailable:20,
            GustPerTable:5
        },
        {
            hotelId:2,
            TableAvailable:50,
            GustPerTable:8
        },
        {
            hotelId:3,
            TableAvailable:30,
            GustPerTable:7

        },
        {
            hotelId:4,
            TableAvailable:30,
            GustPerTable:7
        }


    ]

}