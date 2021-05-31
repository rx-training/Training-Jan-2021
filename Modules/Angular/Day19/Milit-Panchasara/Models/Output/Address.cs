using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace assignmentAPIs.Models.Output
{
    [NotMapped]
    public class Address
    {
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Pin { get; set; }
        public string ContactNumber { get; set; }
    }
}
