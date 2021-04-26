
using System;
using System.Collections.Generic;
using System.Text;

namespace PracticeDay12.Models
{
    class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int CourseId { get; set; }
        public Course Course { get; set; }
    }
}
