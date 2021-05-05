using System;
using System.Collections.Generic;

namespace WEBAPI.Models
{
    public partial class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal? Salary { get; set; }
    }
}
