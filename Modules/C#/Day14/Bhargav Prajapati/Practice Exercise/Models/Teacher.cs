using System;
using System.Collections.Generic;

#nullable disable

namespace Practice_Exercise.Models
{
    public partial class Teacher
    {
        public int TeacherId { get; set; }
        public string TeacherName { get; set; }
        public int TeacherExprience { get; set; }
        public int TeacherSalary { get; set; }
        public string TeacherDepartment { get; set; }
    }
}
