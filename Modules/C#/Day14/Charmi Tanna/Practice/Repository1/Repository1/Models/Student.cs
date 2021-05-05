using System;
using System.Collections.Generic;

namespace WEBAPI.Models
{
    public partial class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int? Courseid { get; set; }
        public decimal? AmountPayable { get; set; }

        public virtual Course Course { get; set; }
    }
}
