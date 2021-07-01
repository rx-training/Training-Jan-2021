import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class MovieGenreBase {

//#region movieGenre Prop
        @prop()
        movieGenre : number;
//#endregion movieGenre Prop


//#region movieId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        movieId : number;
//#endregion movieId Prop


//#region genreId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        genreId : number;
//#endregion genreId Prop





}