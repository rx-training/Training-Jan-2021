import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CountryBase {

//#region countryId Prop
        @prop()
        countryId : number;
//#endregion countryId Prop


//#region name Prop
        @maxLength({value:50})
        name : string;
//#endregion name Prop

}