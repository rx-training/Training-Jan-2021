using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class Assignments
    {
        public int AssignmentsId{ get; set; }
        public string AssignmentNumber { get; set; }
        public string AssigmentCategory { get; set; }
        public DateTime EndData { get; set; }
        public string Grade { get; set; }
        
        
        
        public Employees Employees { get; set; }

    }
}
