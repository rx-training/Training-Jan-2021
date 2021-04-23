using System;
using System.Collections.Generic;
using System.Text;

namespace Practice.Models
{
    public class Course
    {
        public int CourseID { get; set; }
        public string CourseName { get; set; }
        public ICollection<Student> Students { get; set; }
    }
}
