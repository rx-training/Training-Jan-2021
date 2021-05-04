using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public  class Employee
    {
        public Employee()
        {
            Assignments = new HashSet<Assignment>();
        }

        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public DateTime? Dob { get; set; }
        public DateTime? HireDate { get; set; }
        public int EmpId { get; set; }

        public virtual ICollection<Assignment> Assignments { get; set; }
    }
}
