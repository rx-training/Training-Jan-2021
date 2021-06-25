import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class RideTypeBase {

//#region rideTypeId Prop
        @prop()
        rideTypeId : any;
//#endregion rideTypeId Prop


//#region rideName Prop
        @required()
        @maxLength({value:50})
        rideName : string;
//#endregion rideName Prop


//#region seatingCapacity Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        seatingCapacity : number;
//#endregion seatingCapacity Prop


//#region pricePerKm Prop
        @required()
        pricePerKm : any;
//#endregion pricePerKm Prop


//#region createdAt Prop
        @prop()
        createdAt : Date;
//#endregion createdAt Prop


//#region modifiedAt Prop
        @prop()
        modifiedAt : Date;
//#endregion modifiedAt Prop

}