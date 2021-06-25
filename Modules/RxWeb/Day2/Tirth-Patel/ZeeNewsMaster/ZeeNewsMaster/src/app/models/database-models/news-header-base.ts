import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class NewsHeaderBase {

//#region newsId Prop
        @prop()
        newsId : number;
//#endregion newsId Prop


//#region category Prop
        @required()
        @maxLength({value:50})
        category : string;
//#endregion category Prop



}