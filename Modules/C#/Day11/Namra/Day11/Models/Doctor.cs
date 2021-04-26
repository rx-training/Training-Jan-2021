using System;
using System.Collections.Generic;

#nullable disable

namespace Day10.Models
{
    public partial class Doctor
    {
        public Doctor()
        {
            Assistants = new HashSet<Assistant>();
            Transcripts = new HashSet<Transcript>();
        }

        public int DoctorId { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string ContactNumber { get; set; }
        public string Email { get; set; }
        public int DepartmentId { get; set; }

        public virtual Department Department { get; set; }
        public virtual ICollection<Assistant> Assistants { get; set; }
        public virtual ICollection<Transcript> Transcripts { get; set; }
    }
}
