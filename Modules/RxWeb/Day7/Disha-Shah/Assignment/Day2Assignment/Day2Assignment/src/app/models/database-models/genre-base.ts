import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class GenreBase {

//#region genreId Prop
        @prop()
        genreId : number;
//#endregion genreId Prop


//#region genre Prop
        @required()
        @maxLength({value:50})
        genre : string;
//#endregion genre Prop



}