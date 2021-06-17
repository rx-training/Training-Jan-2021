import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vCourseLookupBase {

//#region courseId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'courseId', keyColumn: true})
        courseId : number;
//#endregion courseId Prop


//#region courseName Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'courseName', keyColumn: false})
        courseName : string;
//#endregion courseName Prop

}