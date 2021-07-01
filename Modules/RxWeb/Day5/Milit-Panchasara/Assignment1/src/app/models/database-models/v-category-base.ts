import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vCategoryBase {

//#region masterCategory Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'masterCategory', keyColumn: false})
        masterCategory : string;
//#endregion masterCategory Prop


//#region category Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'category', keyColumn: false})
        category : string;
//#endregion category Prop

}