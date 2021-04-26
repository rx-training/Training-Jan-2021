using System;
using System.Collections.Generic;
using System.Text;

namespace PracticeDay12.Models
{
    class Course
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }

        public IList<Student> Students { get; set; }
    }
}
