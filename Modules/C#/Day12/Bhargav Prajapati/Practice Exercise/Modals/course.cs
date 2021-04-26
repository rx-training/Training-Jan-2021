using System;
using System.Collections.Generic;
using System.Text;

namespace Practice_Exercise.Modals
{
    class course
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }
        public int Duration { get; set; }

        public ICollection<CourseStudent> CourseStudents { get; set; }
    }
}
