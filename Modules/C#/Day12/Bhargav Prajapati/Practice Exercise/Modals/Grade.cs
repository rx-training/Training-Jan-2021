using System;
using System.Collections.Generic;
using System.Text;

namespace Practice_Exercise.Modals
{
    class Grade
    {
        public int GradeId { get; set; }
        public string GradeName { get; set; }
    

        public  ICollection<Student>  Students { get; set; }
    }
}
