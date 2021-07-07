export interface UserBookingData
{
    userId?: number,
    userFirstName:string,
    userMiddleName:string,
    userLastName:string,
    userConformationNumber:string,
    userContactNumber:string,
    userEmailAddress:string,
    numberOfGuest:number,
    bookingDateTime:Date,
    costId: number,
    hotelId: number
  }