import {data} from  "./index";

var Country = [];
var DateTime = [];
var Dinning = [];
var Coun :string;
var DateSet: string;

export class BookTable{
    AvailableTotal(){
        for (const val of data) {
            console.log(val);
        }
    }
    
    AvailableByCountry(country:string){
        data.filter((ele,i,arr)=>{
            if(country.toLowerCase()== ele.country.toLowerCase() ){
                Country.push(ele);
                Coun = country;
                return country.toLowerCase()== ele.country.toLowerCase();   
            }
        });
        for (const val of Country) {
            console.log(val);
        }
    }
    AvaliableByTime(year : number,month: number,day: number,hour: number,minute: number){
        data.filter((ele,i,arr)=>
        {
            if(Coun.toLowerCase() == ele.country.toLowerCase() && ele.DateTime.toString() == new Date(year,month,day,hour,minute).toString()){
                DateTime.push(ele);
                DateSet = ele.DateTime.toString();
                return Coun.toLowerCase() == ele.country.toLowerCase() && ele.DateTime,toString() == new Date(year,month,day,hour,minute).toString();
            }
        });
        for (const val of DateTime) {
            console.log(val);
        }
    }
    AvaliableDinningRoomWithTable(name:string){
        data.filter((ele,i,arr)=>
        {
            if(Coun.toLowerCase() == ele.country.toLowerCase() && ele.DateTime.toString() == DateSet && ele.name.toLowerCase()==name.toLowerCase()){
                Dinning.push(ele);
                return  Coun.toLowerCase() == ele.country.toLowerCase() && 
                ele.DateTime.toString() == DateSet && 
                ele.name.toLowerCase()== name.toLowerCase();
            }
        });
        for (const val of Dinning) {
            console.log(val);
        }
    
    }

}