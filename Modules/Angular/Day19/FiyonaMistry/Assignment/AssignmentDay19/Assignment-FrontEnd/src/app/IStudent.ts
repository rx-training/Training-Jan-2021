export interface IStudent{

        studentId : number;
        studentFirstName : string;
        studentMiddleName : string;
        studentLastName : string;
        dob : Date;
        birthPlace : string;
        languagePreferred : string;
        addresses : {
            city : string;
            state : string;
            country : string;
            pinCode : number;
        }[]
        fatherDetails : {
            fatherFirstName : string;
            fatherMiddleName : string;
            fatherLastName : string;
            fatherEmail : string;
            fatherEducationQualification : string;
            fatherProfession : string;
            fatherDesignation : string;
            fatherPhoneNumber : number;
        }[]

        motherDetails : {
            motherFirstName : string;
            motherMiddleName : string;
            motherLastName : string;
            motherEmail : string;
            motherEducationQualification : string;
            motherProfession : string;
            motherDesignation : string;
            motherPhoneNumber : number;
        }[]
    
        emergencyContacts : {
            relation : string,
            phoneNumber : number
        }[]
    
        referenceDetails : {
            referenceThrough : string;
            referenceAddress : string;
            referencePhone : number;
        }[]
    
}