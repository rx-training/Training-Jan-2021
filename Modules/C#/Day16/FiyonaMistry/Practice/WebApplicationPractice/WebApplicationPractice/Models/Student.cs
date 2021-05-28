using System;
using System.Collections.Generic;

#nullable disable

namespace WebApplicationPractice.Models
{
    public partial class Student
    {
        public Student()
        {
            StudentCourses = new HashSet<StudentCourse>();
        }

        public int StudentId { get; set; }
        public string Name { get; set; }

      //  [System.Text.Json.Serialization.JsonIgnore]

        public virtual ICollection<StudentCourse> StudentCourses { get; set; }
    }
}
