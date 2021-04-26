using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp2
{
    public class Course
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }

        public IList<StudentCourse> StudentCourses { get; set; }

    }
}
