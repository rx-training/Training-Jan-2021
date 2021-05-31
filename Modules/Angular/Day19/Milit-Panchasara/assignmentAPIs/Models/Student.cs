using System;
using System.Collections.Generic;

#nullable disable

namespace assignmentAPIs.Models
{
    public partial class Student
    {
        public Student()
        {
            EmergencyDetails = new HashSet<EmergencyDetail>();
            Parents = new HashSet<Parent>();
            ReferenceDetails = new ReferenceDetail();
        }

        public long Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string PlaceOfBirth { get; set; }
        public string FirstLanguage { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Pin { get; set; }
        public string ContactNumber { get; set; }

        public virtual ICollection<EmergencyDetail> EmergencyDetails { get; set; }
        public virtual ICollection<Parent> Parents { get; set; }
        public virtual ReferenceDetail ReferenceDetails { get; set; }
    }
}
