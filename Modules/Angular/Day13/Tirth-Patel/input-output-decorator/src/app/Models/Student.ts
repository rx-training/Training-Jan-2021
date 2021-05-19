export interface student {
    Name: {
        First: string,
        Middle: string,
        Last: String,
    },
    DOB: Date,
    PlaceOfBirth: string,
    FirstLanguage: string,
    Address: {
        city: string,
        State: string,
        CountryPin: number
    },
    Father: {
        FatherName: {
            First: string,
            Middle: string,
            Last: String,
        },
        Email: string,
        EducationQulification: string,
        Profession: string,
        Designation: string,
        Phone: number
    }
    Mother: {
        MotherName: {
            First: string,
            Middle: string,
            Last: String,
        },
        Email: string,
        EducationQulification: string,
        Profession: string,
        Designation: string,
        Phone: number
    }
    EmergencyContactList: {
        Relation: string,
        Number: number,
    }
    RefrenceDetails: {
        Refrencethrough: string,
        AddressWithTelNo: string
    }
}