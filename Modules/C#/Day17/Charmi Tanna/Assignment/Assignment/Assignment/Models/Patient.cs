using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Patient
    {
        public Patient()
        {
            MedicinesAssigneds = new HashSet<MedicinesAssigned>();
        }

        public int PatientId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public int? DepartmentId { get; set; }
        public int? DoctorId { get; set; }
        public int? NurseId { get; set; }

        public virtual Department Department { get; set; }
        public virtual Doctor Doctor { get; set; }
        public virtual Nurse Nurse { get; set; }
        public virtual ICollection<MedicinesAssigned> MedicinesAssigneds { get; set; }
    }
}
