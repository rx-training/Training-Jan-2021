export interface Login
{
    type ?:string;
    title ?:string;
    status : number;
    traceId ?: string;
    token ?: string;
    expiration ?: Date; 
    UserName ?: string;
}