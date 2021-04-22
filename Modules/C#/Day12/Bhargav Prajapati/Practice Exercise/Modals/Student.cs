using System;
using System.Collections.Generic;
using System.Text;

namespace Practice_Exercise.Modals
{
    class Student
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public double Height { get; set; }
        public double Weight { get; set; }
        public int Gradeofid { get; set; }
        


        public Grade Grade { get; set; }
        public Address Address { get; set; }

        public ICollection<CourseStudent> CourseStudents { get; set; }

    }
}
