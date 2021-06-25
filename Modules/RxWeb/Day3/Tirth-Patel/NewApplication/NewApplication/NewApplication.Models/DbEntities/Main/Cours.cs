using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using RxWeb.Core.Annotations;
using RxWeb.Core.Data.Annotations;
using RxWeb.Core.Sanitizers;
using NewApplication.Models.Enums.Main;
using NewApplication.BoundedContext.SqlContext;
namespace NewApplication.Models.Main
{
    [Table("Courses",Schema="dbo")]
    public partial class Cours
    {
		#region CourseId Annotations

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [System.ComponentModel.DataAnnotations.Key]
		#endregion CourseId Annotations

        public int CourseId { get; set; }

		#region CourseName Annotations
        [Unique(connection:typeof(IMainDatabaseFacade))]
        [Required]
        [MaxLength(50)]
		#endregion CourseName Annotations

        public string CourseName { get; set; }


        public virtual ICollection<Student> Students { get; set; }


        public Cours()
        {
			Students = new HashSet<Student>();
        }
	}
}