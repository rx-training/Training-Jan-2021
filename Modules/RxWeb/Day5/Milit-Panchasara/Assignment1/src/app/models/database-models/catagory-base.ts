import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CatagoryBase {

//#region id Prop
        @prop()
        id : number;
//#endregion id Prop


//#region name Prop
        @required()
        @maxLength({value:50})
        name : string;
//#endregion name Prop


//#region masterCategoryId Prop
        @prop()
        masterCategoryId : number;
//#endregion masterCategoryId Prop


//#region createdAt Prop
        @prop()
        createdAt : Date;
//#endregion createdAt Prop


//#region modifiedAt Prop
        @prop()
        modifiedAt : Date;
//#endregion modifiedAt Prop





}