using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using practice.Models.Enums.Main;
using practice.BoundedContext.SqlContext;
namespace practice.Models.Main
{
    [Table("Courses",Schema="dbo")]
    public partial class Course
    {
		#region CourseId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CourseId Annotations

        public int CourseId { get; set; }

		#region CourseName Annotations

        [Required]
        [MaxLength(50)]
        [Unique(connection:typeof(IMainDatabaseFacade))]
		#endregion CourseName Annotations

        public string CourseName { get; set; }


        public virtual ICollection<Student> Students { get; set; }


        public Course()
        {
			Students = new HashSet<Student>();
        }
	}
}