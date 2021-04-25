using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class D6assign3
    {
        public string EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? Salary { get; set; }
        public string JoiningDate { get; set; }
        public string Department { get; set; }
        public string ManagerId { get; set; }
        public string EmpRefId { get; set; }
        public string IncentiveDate { get; set; }
        public int? IncentiveAmount { get; set; }
    }
}
