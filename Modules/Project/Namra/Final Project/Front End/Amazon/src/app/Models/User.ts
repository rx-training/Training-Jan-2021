export interface User {
    userId?: number;
    userFirstName: string;
    userMiddleName: string;
    userLastName: string;
    userLogIn: string;
    userPassword?: string;
    userContactNo: string;
    userEmail: string;
    userBirthDate?: Date;
    userDate?: Date;
}

export interface UserAddress {
    userAddressId ?: number;
    userId : number;
    userAddressFullName : string;
    userAdressContact : string;
    addressType : string;
    userAddressDetail : string;
    userCityId : number;
}