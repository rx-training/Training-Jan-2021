using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    public class Assignment
    {
        public int Id { get; set; }
        public string ActionCode { get; set; }
        public string ActionReasonCode { get; set; }
        public DateTime? ActualTerminationDate { get; set; }
        public string AssignmentCategory { get; set; }
        public string assignmentExtraInformation { get; set; }
        public string AssignmentName { get; set; }
        public string AssignmentNumber { get; set; }
        public DateTime? AssignmentProjectedEndDate { get; set; }
        public string AssignmentStatus { get; set; }
        public int? AssignmentStatusTypeId { get; set; }
        public int? BusinessUnitId { get; set; }
        public DateTime? CreationDate { get; set; }
        public string DefaultExpenseAccount { get; set; }
        public int? DepartmentId { get; set; }
        public DateTime? EffectiveEndDate { get; set; }
        public DateTime? EffectiveStartDate { get; set; }
        public DateTime? EndTime { get; set; }
        public string Frequency { get; set; }
        public string FullPartTime { get; set; }
        public int? GradeId { get; set; }
        public int? GradeLadderId { get; set; }
        public int? JobId { get; set; }
        public DateTime? LastUpdateDate { get; set; }
        public int? LegalEntityId { get; set; }
        public string links { get; set; }
        public int? LocationId { get; set; }
        public int? ManagerAssignmentId { get; set; }
        public int? ManagerId { get; set; }

        [System.Text.Json.Serialization.JsonIgnore]
        public IEnumerable<AssignedWork> Employees { get; set; }
    }
}
