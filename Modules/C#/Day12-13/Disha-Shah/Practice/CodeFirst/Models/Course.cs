using System;
using System.Collections.Generic;
using System.Text;

namespace CodeFirst.Models
{
    public partial class Course
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }

        // Convention1 (One to Many)
        // (Empty)

        // Convention2 (One to Many) & Convention3 (One to Many) & Convention4 (One to Many)
        //public IList<Student> Students { get; set; }
        public Teacher Teachers { get; set; }

        // FluentAPI (Many to Many)
        public IList<StudentCourse> StudentCourses { get; set; }
    }
}
