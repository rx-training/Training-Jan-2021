using System;
using System.Collections.Generic;

#nullable disable

namespace Practice_Exercise.Models
{
    public partial class Employee
    {
        public int EmpId { get; set; }
        public string EmpName { get; set; }
        public int DeparmentId { get; set; }
        public int Salary { get; set; }
        public int? Experiance { get; set; }

        public virtual Department Deparment { get; set; }
    }
}
