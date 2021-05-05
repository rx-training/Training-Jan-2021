using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    public class Assignments
    {
        [Key]
        public int AssignmentID { get; set; }
        public string AssignmentName { get; set; }
        public string AssignmentStatus { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime AssignmentProjectStartDate { get; set; }
        public DateTime AssignmentProjectEndDate { get; set; }
        public int EmployeeId { get; set; }
        public virtual Employees Employees { get; set; }
    }
}
