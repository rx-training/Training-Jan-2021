using System;
using System.Collections.Generic;

#nullable disable

namespace Day17Assignment.Models
{
    public partial class Doctor
    {
        public int DoctorId { get; set; }
        public string DoctorName { get; set; }
        public string DisplayName { get; set; }
        public string Contact { get; set; }
        public int DepartmentId { get; set; }
        public string Email { get; set; }
        public string Specialist { get; set; }

        public virtual Department Department { get; set; }
        public virtual TranscriptDoctor TranscriptDoctor { get; set; }
    }
}
