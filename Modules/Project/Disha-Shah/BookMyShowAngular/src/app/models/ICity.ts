export interface ICity{
    cityId: number;
    regionId: number;
    name: string;
    region?: string;
    eventVenues?: Array<any>;
    theatres?: Array<any>;
}