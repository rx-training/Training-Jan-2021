using System;
using System.Collections.Generic;

#nullable disable

namespace person.Models
{
    public partial class V4
    {
        public decimal EmployeeId { get; set; }
        public string Name { get; set; }
        public decimal ManagerId { get; set; }
        public string ManagerName { get; set; }
    }
}
