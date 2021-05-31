import { EmergencyInput } from "./EmergencyInput";
import { ParentInput } from "./ParentInput";
import { RefDetailInput } from "./RefDetailInput";

export interface StudentInput {
    id?:number,
    firstName: string,
    middleName: string,
    lastName: string,
    dateOfBirth: string,
    placeOfBirth: string,
    firstLanguage: string,
    streetAddress: string,
    city: string,
    state: string,
    country: string,
    pin: string,
    contactNumber: string
    emergencyDetails: EmergencyInput[],
    parents: ParentInput[],
    referenceDetails: RefDetailInput
}