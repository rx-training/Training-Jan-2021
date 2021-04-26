using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Day15.Models
{
    public class Assignment
    {
        [Key]
        public int AssignmentId { get; set; }
        [Required]
        public int EmployeeId { get; set; }
        public Employee Employee { get; set; }

        [Required]
        public int ManagerId { get; set; }
        
        [MaxLength(100)][Required]
        public string AssignmentName { get; set; }
        
        public string Status { get; set; }
    }
}
