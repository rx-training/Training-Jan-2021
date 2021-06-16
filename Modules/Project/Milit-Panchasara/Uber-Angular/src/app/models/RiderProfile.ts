export interface RiderProfileInterface{
    riderId: number,
    firstName: string,
    lastName: string,
    email: string,
    inviteCode: string,
    contactNumber: number,
    country: string,
    modifiedAt?: Date
}

export class RiderProfile implements RiderProfileInterface {
    riderId = 0;
    firstName: '';
    lastName: '';
    email: '';
    inviteCode: '';
    contactNumber: 0;
    country: '';
    modifiedAt: null;
}
