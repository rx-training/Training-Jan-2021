using System;
using System.Collections.Generic;

#nullable disable

namespace StudentAdmissionFormAPI.Models
{
    public partial class StudentDetail
    {
        public int StudentId { get; set; }
        public string StudentFirstName { get; set; }
        public string StudentMiddleName { get; set; }
        public string StudentLastName { get; set; }
        public DateTime Dob { get; set; }
        public string PlaceofBirth { get; set; }
        public string FirstLanguage { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string PinNumber { get; set; }
        public string FatherFirstName { get; set; }
        public string FatherMiddleName { get; set; }
        public string FatherLastName { get; set; }
        public string FatherEmail { get; set; }
        public string FatherEducationQualification { get; set; }
        public string FatherProfession { get; set; }
        public string FatherDesignation { get; set; }
        public string FatherPhoneNumber { get; set; }
        public string MotherFirstName { get; set; }
        public string MotherMiddleName { get; set; }
        public string MotherLastName { get; set; }
        public string MotherEmail { get; set; }
        public string MotherEducationQualification { get; set; }
        public string MotherProfession { get; set; }
        public string MotherDesignation { get; set; }
        public string MotherPhoneNumber { get; set; }
        public string Relation { get; set; }
        public string RelationContectNumber { get; set; }
        public string ReferenceThrrough { get; set; }
        public string ReferenceContectNumber { get; set; }
    }
}
