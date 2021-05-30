export interface IStudent{
    studentId?: number;
    name: string;
    dob: Date;
    placeOfBirth: string;
    language: string;
    address: string;
    fatherName: string;
    fatherEmail: string;
    fatherQualification: string;
    fatherProfession: string;
    fatherDesignation: string;
    fatherPhone: string;
    motherName: string;
    motherEmail: string;
    motherQualification: string;
    motherProfession: string;
    motherDesignation: string;
    motherPhone: string;
    emergencyContacts?: Array<any>;
    referenceDetails?: Array<any>;
}
