using System;
using System.Collections.Generic;

#nullable disable

namespace StudentAdmissionAPI.Models
{
    public partial class StudentAdmissionTable
    {
        public int Sid { get; set; }
        public string SfirstName { get; set; }
        public string SmiddleName { get; set; }
        public string SlastName { get; set; }
        public DateTime? Dob { get; set; }
        public string PlaceOfBirth { get; set; }
        public string FirstLanguage { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public decimal? Pin { get; set; }
        public string FfirstName { get; set; }
        public string FmiddleName { get; set; }
        public string FlastName { get; set; }
        public string Femail { get; set; }
        public string FeducationQualification { get; set; }
        public string Fprofession { get; set; }
        public string Fdesignation { get; set; }
        public decimal? Fphone { get; set; }
        public string MfirstName { get; set; }
        public string MmiddleName { get; set; }
        public string MlastName { get; set; }
        public string Memail { get; set; }
        public string MeducationQualification { get; set; }
        public string Mprofession { get; set; }
        public string Mdesignation { get; set; }
        public decimal? Mphone { get; set; }
        public string Relation { get; set; }
        public decimal? Number { get; set; }
        public string RefernceDetail { get; set; }
    }
}
