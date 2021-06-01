using System;
using System.Collections.Generic;

#nullable disable

namespace AssignmentDay19.Models
{
    public partial class StudentDetail
    {
        public StudentDetail()
        {
            Addresses = new HashSet<Address>();
            EmergencyContacts = new HashSet<EmergencyContact>();
            FatherDetails = new HashSet<FatherDetail>();
            MotherDetails = new HashSet<MotherDetail>();
            ReferenceDetails = new HashSet<ReferenceDetail>();
        }

        public int? StudentId { get; set; }
        public string StudentFirstName { get; set; }
        public string StudentMiddleName { get; set; }
        public string StudentLastName { get; set; }
        public DateTime Dob { get; set; }
        public string BirthPlace { get; set; }
        public string LanguagePreferred { get; set; }

        public virtual ICollection<Address> Addresses { get; set; }
        public virtual ICollection<EmergencyContact> EmergencyContacts { get; set; }
        public virtual ICollection<FatherDetail> FatherDetails { get; set; }
        public virtual ICollection<MotherDetail> MotherDetails { get; set; }
        public virtual ICollection<ReferenceDetail> ReferenceDetails { get; set; }
    }
}
