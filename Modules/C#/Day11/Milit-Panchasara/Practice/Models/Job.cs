using System;
using System.Collections.Generic;

#nullable disable

namespace Practice.Models
{
    public partial class Job
    {
        public Job()
        {
            Employees = new HashSet<Employee>();
        }

        public int JobId { get; set; }
        public string JobTitle { get; set; }
        public int MinSalary { get; set; }
        public int? MaxSalary { get; set; }

        public virtual ICollection<Employee> Employees { get; set; }
    }
}
