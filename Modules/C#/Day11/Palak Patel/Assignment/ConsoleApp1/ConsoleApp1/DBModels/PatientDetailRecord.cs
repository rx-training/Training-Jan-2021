using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1.DBModels
{
    public partial class PatientDetailRecord
    {
        public string Name { get; set; }
        public string Disease { get; set; }
        public string Department { get; set; }
        public int? MorningPills { get; set; }
        public int? AfternoonPills { get; set; }
        public int? NightPills { get; set; }
        public string DoctorName { get; set; }
        public string HealthcareAssistants { get; set; }

        public override string ToString()
        {
            return $"{Name}\t{Disease}\t{Department}\t{MorningPills}\t\t{AfternoonPills}\t\t{NightPills}\t\t{DoctorName}\t{HealthcareAssistants}";
        }
    }
}
