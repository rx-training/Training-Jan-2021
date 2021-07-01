import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class NewsContentBase {

//#region contentId Prop
        @prop()
        contentId : number;
//#endregion contentId Prop


//#region descrioption Prop
        @required()
        descrioption : string;
//#endregion descrioption Prop


//#region images_link Prop
        @prop()
        images_link : string;
//#endregion images_link Prop


//#region video_link Prop
        @prop()
        video_link : string;
//#endregion video_link Prop


//#region publishDate Prop
        @prop()
        publishDate : Date;
//#endregion publishDate Prop


//#region newsId Prop
        @prop()
        newsId : number;
//#endregion newsId Prop



}