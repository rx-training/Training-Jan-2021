using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public partial class Doctor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int DepartmentId { get; set; }

        public virtual Department Department { get; set; }
    }
}
