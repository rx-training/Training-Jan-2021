import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vCertificationLookupBase {

//#region certificationId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'certificationId', keyColumn: true})
        certificationId : number;
//#endregion certificationId Prop


//#region certification Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'certification', keyColumn: false})
        certification : string;
//#endregion certification Prop

}