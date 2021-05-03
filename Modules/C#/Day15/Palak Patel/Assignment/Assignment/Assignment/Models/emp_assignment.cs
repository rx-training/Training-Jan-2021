using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    public class emp_assignment
    {
        public int id { get; set; }
        public string AssignmentCategory { get; set; }
        
        public string AssignmentName { get; set; }
        public string AssignmentNumber { get; set; }
        public DateTime? AssignmentProjectedEndDate { get; set; }
        public string AssignmentStatus { get; set; }
        public int? AssignmentStatusTypeId { get; set; }
        public int? BusinessUnitId { get; set; }
        public DateTime? CreationDate { get; set; }
        public int? DepartmentId { get; set; }
        public DateTime? EffectiveEndDate { get; set; }
        public DateTime? EffectiveStartDate { get; set; }
        public string FullPartTime { get; set; }
        public int? GradeId { get; set; }
        public string links { get; set; }
        public int? LocationId { get; set; }
        public int? ManagerAssignmentId { get; set; }
        public int? ManagerId { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public IEnumerable<employees> Emps { get; set; }
    }
}
