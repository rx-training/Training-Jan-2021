import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CertificationBase {

//#region certificationId Prop
        @prop()
        certificationId : number;
//#endregion certificationId Prop


//#region certification Prop
        @required()
        @maxLength({value:50})
        certification : string;
//#endregion certification Prop



}