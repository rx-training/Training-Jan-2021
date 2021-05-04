using System;
using System.Collections.Generic;

#nullable disable

namespace Assignment.Models
{
    public  class Assignment
    {
        public string ActionCode { get; set; }
        public DateTime? Lastdate { get; set; }
        public string AssignmentName { get; set; }
        public int AssignementId { get; set; }
        public string AssignmentSatus { get; set; }
        public int? EmpId { get; set; }

        public virtual Employee Emp { get; set; }
    }
}
