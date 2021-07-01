import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class MovieBase {

//#region movieId Prop
        @prop()
        movieId : number;
//#endregion movieId Prop


//#region name Prop
        @required()
        @maxLength({value:50})
        name : string;
//#endregion name Prop


//#region time Prop
        @required()
        @maxLength({value:20})
        time : string;
//#endregion time Prop


//#region image Prop
        @required()
        @maxLength({value:1000})
        image : string;
//#endregion image Prop


//#region dateOfRelease Prop
        @required()
        dateOfRelease : Date;
//#endregion dateOfRelease Prop


//#region about Prop
        @required()
        @maxLength({value:100})
        about : string;
//#endregion about Prop


//#region certificationId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        certificationId : number;
//#endregion certificationId Prop


//#region isRecommended Prop
        @prop()
        isRecommended : boolean;
//#endregion isRecommended Prop


//#region isPremiere Prop
        @prop()
        isPremiere : boolean;
//#endregion isPremiere Prop


//#region backgroundImage Prop
        @maxLength({value:1000})
        backgroundImage : string;
//#endregion backgroundImage Prop


//#region cast Prop
        @maxLength({value:2000})
        cast : string;
//#endregion cast Prop


//#region castImages Prop
        @prop()
        castImages : string;
//#endregion castImages Prop





}