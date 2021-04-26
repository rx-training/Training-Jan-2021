using System;
using System.Collections.Generic;

#nullable disable

namespace ConsoleApp1.DBModels
{
    public partial class DoctorDetailRecord
    {
        public int DoctorId { get; set; }
        public string Name { get; set; }
        public int Experience { get; set; }
        public string DepartmentName { get; set; }

        public override string ToString()
        {
            return $"{DoctorId}\t {Name}\t {Experience}\t {DepartmentName}";
        }
    }
}
