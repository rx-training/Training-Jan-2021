import { Address } from "./address";
import { EmergencyDetail } from "./emergencyDetail";
import { ParentDetail } from "./parentDetail";
import { ReferenceDetails } from "./referenceDetails";

export interface Student {
    studentName:{
        firstName: string,
        middleName: string,
        lastName: string
    },
    dob: Date,
    placeOfBirth: string,
    firstLanguage: string,
    address: Address,
    father: ParentDetail,
    mother: ParentDetail,
    emergencyDetail: EmergencyDetail[],
    referenceDetail: ReferenceDetails
}