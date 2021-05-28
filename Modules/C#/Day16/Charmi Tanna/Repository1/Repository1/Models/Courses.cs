using System;
using System.Collections.Generic;

namespace WEBAPI.Models
{
    public partial class Courses
    {
        public Courses()
        {
            Students = new HashSet<Students>();
        }

        public int CourseId { get; set; }
        public string CourseName { get; set; }

        public virtual ICollection<Students> Students { get; set; }
    }
}
