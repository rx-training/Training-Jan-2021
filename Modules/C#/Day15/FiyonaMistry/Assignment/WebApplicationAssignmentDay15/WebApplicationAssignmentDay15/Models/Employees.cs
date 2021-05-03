using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationAssignmentDay15.Models
{
    public class Employees
    {
        [Key]
        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string HomePhoneNumber { get; set; }
        public string MaritalStatus { get; set; }
        public string DisplayName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string AddressLine1 { get; set; }
        public Int64 CitizenshipId { get; set; }
        public string CitizenshipStatus { get; set; }
        public DateTime CitizenshipToDate { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public Int64 DriversLicenseId { get; set; }
        public Int64 LegalEntityId { get; set; }
        public DateTime HireDate { get; set; }
    }
}
