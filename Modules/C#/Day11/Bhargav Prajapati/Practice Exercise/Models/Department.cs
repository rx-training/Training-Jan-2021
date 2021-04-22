using System;
using System.Collections.Generic;

#nullable disable

namespace Practice_Exercise.Models
{
    public partial class Department
    {
        public Department()
        {
            Employees = new HashSet<Employee>();
        }

        public int DeparmentId { get; set; }
        public string DeparmentName { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
    }
}
