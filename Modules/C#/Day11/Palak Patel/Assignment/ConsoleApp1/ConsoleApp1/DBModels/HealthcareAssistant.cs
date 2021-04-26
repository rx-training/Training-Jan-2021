using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1.DBModels
{
    public partial class HealthcareAssistant
    {
        public int Haid { get; set; }
        public string Name { get; set; }
        public int? DepartmentId { get; set; }

        public virtual Department Department { get; set; }
    }
}
