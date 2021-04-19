using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CodeFirst.Models
{
    [Table("TeacherInfo")]
    public partial class Teacher
    {
        public Teacher() { }

        [Key]
        public int Id { get; set; }

        [Column("Name", TypeName = "ntext")]
        [MaxLength(20)]
        public string TeacherName { get; set; }

        [NotMapped]
        public int? Age { get; set; }

        public int CId { get; set; }

        [ForeignKey("CId")]
        public Course Course { get; set; }

        public TeacherAddress Address { get; set; }
    }
}
