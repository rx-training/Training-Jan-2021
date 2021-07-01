import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vNewsContentBase {

//#region newsId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'newsId', keyColumn: false})
        newsId : any;
//#endregion newsId Prop


//#region category Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'category', keyColumn: false})
        category : string;
//#endregion category Prop


//#region contentId Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'contentId', keyColumn: true})
        contentId : number;
//#endregion contentId Prop


//#region publishDate Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'publishDate', keyColumn: false})
        publishDate : any;
//#endregion publishDate Prop

}