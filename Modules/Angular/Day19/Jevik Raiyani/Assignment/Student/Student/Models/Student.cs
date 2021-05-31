using System;
using System.Collections.Generic;

#nullable disable

namespace Student.Models
{
    public partial class Student
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public DateTime? Dob { get; set; }
        public string PlaceOfBirth { get; set; }
        public string FirstLanguage { get; set; }
        public string AddressCity { get; set; }
        public string AddressState { get; set; }
        public string AddressCountry { get; set; }
        public string AddressPin { get; set; }
        public string FatherFirstname { get; set; }
        public string FatherMiddlename { get; set; }
        public string FatherLastname { get; set; }
        public string FatherEmail { get; set; }
        public string FatherEducationQualification { get; set; }
        public string FatherProfession { get; set; }
        public string FatherDesignation { get; set; }
        public string FatherPhone { get; set; }
        public string MotherFirstname { get; set; }
        public string MotherMiddlename { get; set; }
        public string MotherLastname { get; set; }
        public string MotherEmail { get; set; }
        public string MotherEducationQualification { get; set; }
        public string MotherProfession { get; set; }
        public string MotherDesigation { get; set; }
        public string MotherPhone { get; set; }
        public string EemergencyRelation { get; set; }
        public string EmergencyNumber { get; set; }
        public string EemergencyRelation1 { get; set; }
        public string EmergencyNumber1 { get; set; }
        public string EmergencyRelation2 { get; set; }
        public string EmergencyNumber2 { get; set; }
        public string ReferenceDetail { get; set; }
        public string ReferenceThrough { get; set; }
        public string Rcity { get; set; }
        public string Rstate { get; set; }
        public string Rcountry { get; set; }
        public string Rpin { get; set; }
        public string RtelNo { get; set; }
    }
}
