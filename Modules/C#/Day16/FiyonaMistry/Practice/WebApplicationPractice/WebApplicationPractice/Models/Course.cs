using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationPractice.Models
{
    public partial class Course
    {
        public Course()
        {
            StudentCourses = new HashSet<StudentCourse>();
        }

        public int CourseId { get; set; }
        public string CourseName { get; set; }

        public virtual ICollection<StudentCourse> StudentCourses { get; set; }
    }
}
