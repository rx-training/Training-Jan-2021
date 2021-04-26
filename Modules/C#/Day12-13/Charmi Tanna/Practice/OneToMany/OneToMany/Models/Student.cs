using System;
using System.Collections.Generic;
using System.Text;

namespace OneToMany.Models
{
    class Student
    {
        public int StudentId { get; set; }
        public string StudentName { get; set; }
        public Grade Grade { get; set; }
    }
}
