using System;
using System.Collections.Generic;
using System.Text;

namespace CodeFirst.Models
{
    public partial class Student
    {
        public int StudentId { get; set; }
        public string Name { get; set; }
        public DateTime DOB { get; set; }
        //public string Address { get; set; }

        // Convention4 (One to Many)
        //public int? CourseId { get; set; }
        //public Course Course { get; set; }

        // Convention1 (One to Many) & Convention3 (One to Many)
        //public Course Course { get; set; }

        // Convention2 (One to Many)
        // (Empty)

        // Convention (One to One)
        public StudentAddress Address { get; set; }

        // Fluent API (One to Many)
        public int CurrentGradeId { get; set; }
        public Grade Grade { get; set; }

        // FluentAPI (Many to Many)
        public IList<StudentCourse> StudentCourses { get; set; }
    }
}
