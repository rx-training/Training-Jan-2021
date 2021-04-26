using System;
using System.Collections.Generic;
using System.Text;

namespace Practice.Models
{
    class Student
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public byte[] Photo { get; set; }
        public decimal Height { get; set; }
        public float Weight { get; set; }

        public int GradeId { get; set; }
        public Grade Grades { get; set; }
        public IList<EnrolledCourses> EnrolledCourses { get; set; }
    }
}
