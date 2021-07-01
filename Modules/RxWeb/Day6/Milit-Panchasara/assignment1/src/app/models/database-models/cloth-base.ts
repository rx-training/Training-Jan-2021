import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ClothBase {

//#region id Prop
        @prop()
        id : number;
//#endregion id Prop


//#region brand Prop
        @required()
        @maxLength({value:50})
        brand : string;
//#endregion brand Prop


//#region productName Prop
        @required()
        @maxLength({value:50})
        productName : string;
//#endregion productName Prop


//#region price Prop
        @required()
        price : any;
//#endregion price Prop


//#region category Prop
        @required()
        @maxLength({value:50})
        category : string;
//#endregion category Prop


//#region size Prop
        @required()
        @maxLength({value:5})
        size : string;
//#endregion size Prop


//#region color Prop
        @required()
        @maxLength({value:20})
        color : string;
//#endregion color Prop


//#region gender Prop
        @required()
        @maxLength({value:6})
        gender : string;
//#endregion gender Prop

}