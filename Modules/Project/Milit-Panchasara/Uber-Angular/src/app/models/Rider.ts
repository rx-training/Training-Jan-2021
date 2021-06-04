export interface RiderInterface {
    riderId?: number,
    firstName: string,
    lastName: string,
    email: string,
    emailVerified: string,
    contactNumber: string,
    isNew?:boolean,
    isBlocked: boolean,
    isLoggedIn: string,
    sessionExpiresIn: string,
    password: string,
    createdAt?: string,
    modifiedAt?: string,
    country:string
}