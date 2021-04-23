using System;
using System.Collections.Generic;
using System.Text;

namespace Practice.Models
{
    class Courses
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<EnrolledCourses> EnrolledCourses { get; set; }
    }
}
