using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplicationAssignmentDay15.Models
{
    public class Assignments
    {
        [Key]
        public Int64 AssignmentId { get; set; }
        public string AssignmentName { get; set; }
        public string AssignmentCategory { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime AssignmentProjectedEndDate { get; set; }
        public string AssignmentStatus { get; set; }
        public string FullPartTime { get; set; }
        public Int64 GradeId { get; set; }
        public Int64 JobId { get; set; }
        public Int64 ManagerId { get; set; }
        public Int64 LegalEntityId { get; set; }

        public Employees Employees { get; set; }     // FK
    }
}
