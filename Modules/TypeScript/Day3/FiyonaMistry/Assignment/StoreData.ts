export class Applicant{

    Id : number;
    Fname : string;
    Lname : string;
    Email : string;
    PhoneNumber : number;
    Degree : string;
    DOB? : Date;

    constructor(id : number, fname : string, lname : string, email : string, phoneNumber : number, degree : string){
        this.Id = id;
        this.Fname = fname;
        this.Lname = lname;
        this.Email = email;
        this.PhoneNumber = phoneNumber;
        this.Degree = degree;
    }

    display(data : any) : any{
        console.log("Storing Applicants data : ");

        for(var applicant of data){
            console.log(applicant);
        }

        console.log("");
        console.log("Starting Interview Process...");   
        console.log("");
    }

}