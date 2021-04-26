using System;
using System.Collections.Generic;
using System.Text;

namespace FluentAPIPractice.Models
{
    public class StudentDetail
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public int StudentId { get; set; }
        public Student Student { get; set; }
    }
}
