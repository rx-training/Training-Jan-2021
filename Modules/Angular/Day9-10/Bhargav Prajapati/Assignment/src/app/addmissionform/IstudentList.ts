
export interface StudentList
{
  
   StudentName :
   {
      FirstName:string,
      MiddleName:string,
      LastName:string
   },
   StudentDateOfBirth:Date,
   StudentPlaceofBirth:string,
   StudentFirstLanguage:string,
   Address:{
      City:string,
      State:string,
      Country:string,
      PinNumber:number
    },
    MotherName:
    {
      FirstName:string,
      MiddleName:string,
      LastName:string
    },
    MotherDetails:
    {
      Email:string,
      EducationQualification:string,
      Profession:string,
      Designation:string,
      PhoneNumber:number   

    },
    FatherName:
    {
      FirstName:string,
      MiddleName:string,
      LastName:string
    },
    FatherDetails:
    {
      Email:string,
      EducationQualification:string,
      Profession:string,
      Designation:string,
      PhoneNumber:number  

    },
    EmergencyContactList:
    {
      Relation:string,
      MobileNumber:number
    },
    Reference:
    {
      Referencethrough:string,
      MobileNumber:number
    }


   
}


