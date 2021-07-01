export class GlobalConstants {

    // api base url
    //local
    //public static apiBaseURL: string = 'https://localhost:44383/api';

    //hosted
    public static apiBaseURL: string = 'http://20.198.103.48:88/api';

    // password for encryption-decryption
    public static cryptoPassword: string = 'UberSecret@123';


    public static tripStatus = {
        New:"New",
        Started:"Started",
        Completed:"Completed",
        Cancelled:"Cancelled"
    };

}