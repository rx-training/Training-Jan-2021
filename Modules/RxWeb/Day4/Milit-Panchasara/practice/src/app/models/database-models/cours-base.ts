import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class CoursBase {

//#region courseId Prop
        @prop()
        courseId : number;
//#endregion courseId Prop


//#region courseName Prop
        @required()
        @maxLength({value:50})
        courseName : string;
//#endregion courseName Prop



}