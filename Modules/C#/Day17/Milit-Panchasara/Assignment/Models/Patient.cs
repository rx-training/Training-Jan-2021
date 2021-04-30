using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Patient
    {
        public Patient()
        {
            AssignedStaffs = new HashSet<AssignedStaff>();
            Dosages = new HashSet<Dosage>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string ContactNumber { get; set; }
        public int DepartmentId { get; set; }
        public string Description { get; set; }

        public virtual Department Department { get; set; }
        public virtual ICollection<AssignedStaff> AssignedStaffs { get; set; }
        public virtual ICollection<Dosage> Dosages { get; set; }
    }
}
