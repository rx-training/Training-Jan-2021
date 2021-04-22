using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp2
{
    public class Student
    {
        public int StudentID { get; set; }
        public string Name { get; set; }


        public IList<StudentCourse> StudentCourses { get; set; }
    }
}
