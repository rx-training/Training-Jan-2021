using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class Departments1
    {
        public decimal DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public decimal? ManagerId { get; set; }
        public decimal? LocationId { get; set; }
    }
}
