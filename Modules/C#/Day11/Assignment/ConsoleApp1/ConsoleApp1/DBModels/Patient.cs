using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1.DBModels
{
    public partial class Patient
    {
        public int PatientId { get; set; }
        public string Name { get; set; }
        public int? DepartmentId { get; set; }
        public string Disease { get; set; }
        public int? MorningPills { get; set; }
        public int? AfternoonPills { get; set; }
        public int? NightPills { get; set; }

        public virtual Department Department { get; set; }
    }
}
