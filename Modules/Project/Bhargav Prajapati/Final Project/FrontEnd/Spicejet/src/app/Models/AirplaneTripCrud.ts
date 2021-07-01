export interface AirplaneTripCrud
{
    
        travelId?:number,
        depatureCity: string,
        depatureAirPortName:string,
        arrivedCity:string,
        arriveAirPortName:string,
        departDate:Date,
        arriveDate:Date,
        departTime:string,
        arriveTime:string,
        airPlaneId: number,
        costId:number
        
      
}