export interface DriverProfileInterface{
    driverId: number,
    firstName: string,
    lastName: string,
    email: string,
    contactNumber: number,
    modifiedAt?: Date
}

export class DriverProfile implements DriverProfileInterface {
    driverId = 0;
    firstName: '';
    lastName: '';
    email: '';
    contactNumber: 0;
    modifiedAt: null;
}
