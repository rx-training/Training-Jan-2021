using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    public class AssignedWork
    {
        public Employee Employee { get; set; }
        public int EmployeeId { get; set; }

        public Assignment Assignment { get; set; }
        public int AssignmentId { get; set; }
    }
}
