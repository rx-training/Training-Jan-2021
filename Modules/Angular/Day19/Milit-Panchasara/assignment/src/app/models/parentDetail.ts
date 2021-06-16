export interface ParentDetail {
    id?:number,
    name: {
        firstName: string,
        middleName: string,
        lastName: string
    },
    email: string,
    education: string,
    profession: string,     
    designation: string,
    phone: string
}