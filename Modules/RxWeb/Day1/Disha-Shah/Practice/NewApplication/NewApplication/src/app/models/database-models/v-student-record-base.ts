import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vStudentRecordBase {

//#region studentId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'studentId', keyColumn: true})
        studentId : number;
//#endregion studentId Prop


//#region studentName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'studentName', keyColumn: false})
        studentName : string;
//#endregion studentName Prop


//#region rollNumber Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'rollNumber', keyColumn: false})
        rollNumber : number;
//#endregion rollNumber Prop


//#region age Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'age', keyColumn: false})
        age : number;
//#endregion age Prop


//#region gender Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'gender', keyColumn: false})
        gender : string;
//#endregion gender Prop


//#region emailId Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'emailId', keyColumn: false})
        emailId : string;
//#endregion emailId Prop


//#region courseName Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'courseName', keyColumn: false})
        courseName : string;
//#endregion courseName Prop

}