using System;
using System.Collections.Generic;
using System.Text;

namespace Practice.Models
{
    class EnrolledCourses
    {
        public int StudentId { get; set; }
        public Student Students { get; set; }
        public int CourseId { get; set; }
        public Courses Courses { get; set; }
    }
}
