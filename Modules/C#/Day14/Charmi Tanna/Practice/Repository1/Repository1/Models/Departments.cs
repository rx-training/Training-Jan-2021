using System;
using System.Collections.Generic;

namespace WEBAPI.Models
{
    public partial class Departments
    {
        public decimal DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public decimal? ManagerId { get; set; }
        public decimal? LocationId { get; set; }
    }
}
