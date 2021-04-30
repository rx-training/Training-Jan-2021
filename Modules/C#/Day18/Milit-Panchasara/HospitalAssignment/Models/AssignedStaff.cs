using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalAssignment.Models
{
    public partial class AssignedStaff
    {
        public int Id { get; set; }
        public int PatientId { get; set; }
        public int StaffId { get; set; }

        public virtual Patient Patient { get; set; }
        public virtual staff Staff { get; set; }
    }
}
