using System;
using System.Collections.Generic;
using System.Text;

namespace Practice.Models
{
   public class Course
    {
        public int CourseId { get; set; }
        public string Name { get; set; }
        
       public IList<StudentCourses> StudentCourses { get; set; }
    }
}
