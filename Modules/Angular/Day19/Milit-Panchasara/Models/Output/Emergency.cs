using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace assignmentAPIs.Models.Output
{
    [NotMapped]
    public class Emergency
    {
        public string Relation { get; set; }
        public string ContactNumber { get; set; }
    }
}
