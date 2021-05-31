using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace assignmentAPIs.Models.Output
{
    [NotMapped]
    public class Father
    {
        public Name Name { get; set; }
        public string Email { get; set; }
        public string Education { get; set; }
        public string Profession { get; set; }
        public string Designation { get; set; }
        public string ContactNumber { get; set; }
        public string Relation { get; set; }
    }
}
