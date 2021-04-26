using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

// Data Annotation practice
namespace Practice.Models
{
    [Table("StudentInfo")]
    class Info
    {
        [Key]
        public int StudentInfoId { get; set; }

        [Column("SName", TypeName = "ntext")]
        [MaxLength(20)]
        public string StudentName { get; set; }

        // This prop is not mapped with DB and is nullable
        [NotMapped]
        public string? FName { get; set; }


    }
}
