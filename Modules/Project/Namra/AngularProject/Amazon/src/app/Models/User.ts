export interface User
{
    userId ?: number;
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