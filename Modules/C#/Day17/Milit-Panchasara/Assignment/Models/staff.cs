using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class staff
    {
        public staff()
        {
            AssignedStaffs = new HashSet<AssignedStaff>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string ContactNumber { get; set; }
        public int DepartmentId { get; set; }
        public string JobType { get; set; }

        public virtual Department Department { get; set; }
        public virtual ICollection<AssignedStaff> AssignedStaffs { get; set; }
    }
}
