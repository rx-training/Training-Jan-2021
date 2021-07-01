import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class StudentBase {

//#region studentId Prop
        @prop()
        studentId : number;
//#endregion studentId Prop


//#region studentName Prop
        @required()
        @maxLength({value:50})
        studentName : string;
//#endregion studentName Prop


//#region rollNumber Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        rollNumber : number;
//#endregion rollNumber Prop


//#region age Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        age : number;
//#endregion age Prop


//#region gender Prop
        @required()
        @maxLength({value:10})
        gender : string;
//#endregion gender Prop


//#region emailId Prop
        @required()
        @maxLength({value:30})
        emailId : string;
//#endregion emailId Prop


//#region courseId Prop
        @prop()
        courseId : number;
//#endregion courseId Prop



}