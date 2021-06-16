export interface DriverInterface {
    driverId?: number,
    firstName: string,
    lastName: string,
    email: string,
    emailVerified: string,
    contactNumber: string,
    totalRidesDone: number,
    totalRidesCancelled: number,
    salary: number,
    isBlocked: boolean,
    isLoggedIn: string,
    sessionExpiresIn: string,
    password: string,
    createdAt?: string,
    modifiedAt?: string
}