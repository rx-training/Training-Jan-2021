import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vCatagoryBase {

//#region masterCatagory Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'masterCatagory', keyColumn: false})
        masterCatagory : string;
//#endregion masterCatagory Prop


//#region catagory Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'catagory', keyColumn: false})
        catagory : string;
//#endregion catagory Prop

}