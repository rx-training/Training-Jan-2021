export interface student {
    studentId?:number
    studentName?: string,
    dob?: Date,
    PlaceOfBirth?: string,
    FirstLanguage?: string,
    
        city?: string,
        State?: string,
        CountryPin?: number,
        FatherName?:string,
        
        FEmail?: string,
        FEduQulification?: string,
        FProfession?: string,
        FDesignation?: string,
        FPhone?: number,
    
    MotherName?:string,
        MEmail?: string,
        MEducationQulification?: string,
        MProfession?: string,
        MDesignation?: string,
        MPhone?: number
    ,
    emergencyContactLists:  {
        SrNo?:number,
        StudentId?:number,
        eRelation?: string,
        eNumber?: number,
    }[] ,
        Refrencethrough?: string,
        RAddressWithTel?: string
   
}