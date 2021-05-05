using System;
using System.Collections.Generic;

namespace WEBAPI.Models
{
    public partial class Students
    {
        public int StudentId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int CourseId { get; set; }

        public virtual Courses Course { get; set; }
    }
}
