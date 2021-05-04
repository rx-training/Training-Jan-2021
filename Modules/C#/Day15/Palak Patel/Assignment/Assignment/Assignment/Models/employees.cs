using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Assignment.Models
{
    public class employees
    {
        public int id { get; set; }
        public string Address { get; set; }
        public int? CitizenshipId { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public string DisplayName { get; set; }
        public int? DrivingLicenseId { get; set; }
        public string FirstName { get; set; }
        public string Gender { get; set; }
        public DateTime? HireDate { get; set; }
        public string LastName { get; set; }
        public string LicenseNumber { get; set; }
        public string MaritalStatus { get; set; }
        public string MiddleName { get; set; }
        public string NationalId { get; set; }
        public IEnumerable<EmpAssigned> Assignments { get; set; }
    }
}
