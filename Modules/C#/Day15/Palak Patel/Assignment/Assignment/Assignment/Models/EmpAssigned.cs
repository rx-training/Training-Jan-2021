using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class EmpAssigned
    {
        public employees Employee { get; set; }
        public int EmployeeId { get; set; }

        public emp_assignment assignments { get; set; }
        public int AssignmentId { get; set; }

    }
}
