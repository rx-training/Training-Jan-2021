using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1.DBModels
{
    public partial class Department
    {
        public Department()
        {
            Doctors = new HashSet<Doctor>();
            HealthcareAssistants = new HashSet<HealthcareAssistant>();
            Patients = new HashSet<Patient>();
        }

        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public int TotalDoctors { get; set; }
        public int TotalPaitents { get; set; }
        public int TotalHa { get; set; }

        public virtual ICollection<Doctor> Doctors { get; set; }
        public virtual ICollection<HealthcareAssistant> HealthcareAssistants { get; set; }
        public virtual ICollection<Patient> Patients { get; set; }
    }
}
