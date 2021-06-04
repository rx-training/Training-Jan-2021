export interface RideTypeInterface{
    rideTypeId?: number,
    rideName: string,
    pricePerKm: number,
    seatingCapacity: number,
    createdAt?: string,
    modifiedAt?: string
}

export class RideType implements RideTypeInterface {
    rideTypeId = null;
    rideName: '';
    pricePerKm: 0;
    seatingCapacity: 0;
    createdAt: null;
    ModifiedAt: null;
}
