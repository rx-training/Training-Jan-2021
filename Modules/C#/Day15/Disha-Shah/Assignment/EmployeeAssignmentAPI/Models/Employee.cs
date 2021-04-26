using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeeAssignmentAPI.Models
{
    public partial class Employee
    {
        public Employee()
        {
            Assignments = new HashSet<Assignment>();
        }

        public long EmpId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string AddressLine1 { get; set; }
        public string City { get; set; }
        public DateTime HireDate { get; set; }

        public virtual ICollection<Assignment> Assignments { get; set; }
    }
}
