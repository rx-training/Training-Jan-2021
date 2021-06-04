export interface TripInterface {
    tripId?: number,
    riderId: number,
    driverId: number,
    sourceLocationId: number,
    destinationLocationId: number,
    rideTypeId: number,
    startTime: string,
    endTime: string,
    status: string,
    estimatedFairAmount: number,
    actualFairAmount: number,
    paymentMethod: string,
    cancelledBy: string,
    createdAt?: string,
    modifiedAt?: string
}