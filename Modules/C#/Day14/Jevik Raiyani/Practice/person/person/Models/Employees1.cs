using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Employees1
    {
        public decimal EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime HireDate { get; set; }
        public string JobId { get; set; }
        public decimal? Salary { get; set; }
        public decimal? CommissionPct { get; set; }
        public decimal? ManagerId { get; set; }
        public decimal? DepartmentId { get; set; }
    }
}
