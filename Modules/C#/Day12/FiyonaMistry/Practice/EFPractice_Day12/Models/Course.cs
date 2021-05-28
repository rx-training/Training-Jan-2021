using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EFPractice_Day12.Models
{
    public class Course
    {
        public int CourseId { get; set; }
        public string CourseName { get; set; }

        public IList<StudentCourse> StudentCourses { get; set; }   // M2M

        // For one-to-many 
        // public ICollection<Student> Students { get; set; }  
    }
}
