export interface RiderTripInterface {
    tripId?: number,
    riderId: number,
    driverId: number,
    riderName: string,
    driverName: string,
    sourceLocation: string,
    destinationLocation: string,
    rideName: string,
    vehicleBrand: string,
    vehicleName: string,
    registrationNo: string,
    startTime: string,
    endTime: string,
    status: string,
    estimatedFairAmount: number,
    actualFairAmount: number,
    cancelledBy?: string
}