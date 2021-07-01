using System;
using System.Collections.Generic;

#nullable disable

namespace StudentAdmissionFormAPI.Models
{
    public partial class Student
    {
        public Student()
        {
            EmergencyContacts = new HashSet<EmergencyContact>();
            ReferenceDetails = new HashSet<ReferenceDetail>();
        }

        public int StudentId { get; set; }
        public string Name { get; set; }
        public DateTime Dob { get; set; }
        public string PlaceOfBirth { get; set; }
        public string Language { get; set; }
        public string Address { get; set; }
        public string FatherName { get; set; }
        public string FatherEmail { get; set; }
        public string FatherQualification { get; set; }
        public string FatherProfession { get; set; }
        public string FatherDesignation { get; set; }
        public long FatherPhone { get; set; }
        public string MotherName { get; set; }
        public string MotherEmail { get; set; }
        public string MotherQualification { get; set; }
        public string MotherProfession { get; set; }
        public string MotherDesignation { get; set; }
        public long MotherPhone { get; set; }

        public virtual ICollection<EmergencyContact> EmergencyContacts { get; set; }
        public virtual ICollection<ReferenceDetail> ReferenceDetails { get; set; }
    }
}
