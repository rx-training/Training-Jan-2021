using System;
using System.Collections.Generic;

namespace WEBAPI.Models
{
    public partial class Course
    {
        public Course()
        {
            Student = new HashSet<Student>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? Price { get; set; }
        public decimal? Discount { get; set; }

        public virtual ICollection<Student> Student { get; set; }
    }
}
