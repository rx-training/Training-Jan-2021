using System;
using System.Collections.Generic;

#nullable disable

namespace EmployeeAssignmentAPI.Models
{
    public partial class Assignment
    {
        public long AssignmentId { get; set; }
        public string AssignmentName { get; set; }
        public string AssignmentStatus { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public long? EmployeeId { get; set; }

        public virtual Employee Employee { get; set; }
    }
}
