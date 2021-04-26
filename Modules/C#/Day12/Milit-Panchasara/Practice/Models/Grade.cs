using System;
using System.Collections.Generic;
using System.Text;

namespace Practice.Models
{
    class Grade
    {
        public int Id { get; set; }
        public string GradeName { get; set; }
        public string Section { get; set; }

        public IList<Student> Students { get; set; }
    }
}
