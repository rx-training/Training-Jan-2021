import { Address } from "./address";

export interface ReferenceDetails {
    id?:number,
    referenceThrough: string,
    address:Address
}