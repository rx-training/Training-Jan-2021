using System;
using System.Collections.Generic;

#nullable disable

namespace HospitalAPI.Models
{
    public partial class PatientsDoctor
    {
        public int Id { get; set; }
        public int? DoctorId { get; set; }
        public int? PatientId { get; set; }

        public virtual Doctor Doctor { get; set; }
        public virtual Patient Patient { get; set; }
    }
}
