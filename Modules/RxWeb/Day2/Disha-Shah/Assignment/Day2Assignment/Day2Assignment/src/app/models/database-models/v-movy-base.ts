import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vMovyBase {

//#region about Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'about', keyColumn: false})
        about : string;
//#endregion about Prop


//#region backgroundImage Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'backgroundImage', keyColumn: false})
        backgroundImage : string;
//#endregion backgroundImage Prop


//#region cast Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'cast', keyColumn: false})
        cast : string;
//#endregion cast Prop


//#region castImages Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'castImages', keyColumn: false})
        castImages : string;
//#endregion castImages Prop


//#region dateOfRelease Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'dateOfRelease', keyColumn: false})
        dateOfRelease : any;
//#endregion dateOfRelease Prop


//#region image Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'image', keyColumn: false})
        image : string;
//#endregion image Prop


//#region isPremiere Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'isPremiere', keyColumn: false})
        isPremiere : any;
//#endregion isPremiere Prop


//#region isRecommended Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'isRecommended', keyColumn: false})
        isRecommended : any;
//#endregion isRecommended Prop


//#region name Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'name', keyColumn: false})
        name : string;
//#endregion name Prop


//#region time Prop
        @gridColumn({visible: true, columnIndex:10, allowSorting: true, headerKey: 'time', keyColumn: false})
        time : string;
//#endregion time Prop


//#region genre Prop
        @gridColumn({visible: true, columnIndex:11, allowSorting: true, headerKey: 'genre', keyColumn: false})
        genre : string;
//#endregion genre Prop


//#region certification Prop
        @gridColumn({visible: true, columnIndex:12, allowSorting: true, headerKey: 'certification', keyColumn: false})
        certification : string;
//#endregion certification Prop

}