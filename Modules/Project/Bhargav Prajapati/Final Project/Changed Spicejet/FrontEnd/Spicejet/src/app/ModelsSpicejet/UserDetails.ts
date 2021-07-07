export interface UserDetails
{
    userId?:number,
    pnrNumber:string,
    userFirstName: string,
    userMiddleName?: string,
    userLastName?: string,
    userContactNumber: string,
    userEmail: string,
    bookingDateTime:Date,
    airplaneId:number,
    costId:number,
    tripId:number


}