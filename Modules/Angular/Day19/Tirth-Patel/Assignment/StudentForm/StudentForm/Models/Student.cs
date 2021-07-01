using System;
using System.Collections.Generic;

#nullable disable

namespace StudentForm.Models
{
    public partial class Student
    {
        //public Student()
        //{
        //    EmergencyContactLists = new HashSet<EmergencyContactList>();
        //}

        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public DateTime? Dob { get; set; }
        public string PlaceOfBirth { get; set; }
        public string FirstLanguage { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string CountryPin { get; set; }
        public string FatherName { get; set; }
        public string FEmail { get; set; }
        public string FEduQualification { get; set; }
        public string FProfession { get; set; }
        public string FDesignation { get; set; }
        public string FPhone { get; set; }
        public string MotherName { get; set; }
        public string MEmail { get; set; }
        public string MEduQualification { get; set; }
        public string MProfession { get; set; }
        public string MDesignation { get; set; }
        public string MPhone { get; set; }
        public string ReferenceThrough { get; set; }
        public string RAddressWithTel { get; set; }

        public virtual ICollection<EmergencyContactList> EmergencyContactLists { get; set; }
    }
}
