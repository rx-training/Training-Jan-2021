import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class VehicleBase {

//#region id Prop
        @prop()
        id : number;
//#endregion id Prop


//#region driverId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        driverId : number;
//#endregion driverId Prop


//#region vehicleName Prop
        @required()
        @maxLength({value:50})
        vehicleName : string;
//#endregion vehicleName Prop


//#region vehicleBrand Prop
        @required()
        @maxLength({value:50})
        vehicleBrand : string;
//#endregion vehicleBrand Prop


//#region registrationNo Prop
        @required()
        @maxLength({value:10})
        registrationNo : string;
//#endregion registrationNo Prop



}