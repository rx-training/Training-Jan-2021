using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp2
{
    public class StudentCourse
    {
        public int StudentID { get; set; }
        public Student Student { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}
