import {MovieBase} from '../database-models/movie-base';
import {CertificationBase} from '../database-models/certification-base';
import {MovieGenreBase} from '../database-models/movie-genre-base';
//Generated Imports
export class Movie extends MovieBase 
{




//#region Generated Reference Properties
//#region certification Prop
certification : CertificationBase;
//#endregion certification Prop
//#region movieGenres Prop
movieGenres : MovieGenreBase[];
//#endregion movieGenres Prop

//#endregion Generated Reference Properties
}