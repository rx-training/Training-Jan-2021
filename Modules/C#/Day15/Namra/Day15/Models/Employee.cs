using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
namespace Day15.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }
        [MaxLength(100)]
        public string FullName { get; set; }
        [MaxLength(20)]
        public string DisplayName { get; set; }
        [MaxLength(100)]
        public string Address { get; set; }
        [MaxLength(30)]
        public string City { get; set; }

        public ICollection<Assignment> Assignments { get; set; }
    }
}
