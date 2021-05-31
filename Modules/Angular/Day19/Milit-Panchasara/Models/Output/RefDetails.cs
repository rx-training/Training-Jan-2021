using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace assignmentAPIs.Models.Output
{
    [NotMapped]
    public class RefDetails
    {
        public string ReferenceThrough { get; set; }
        public Address Address { get; set; }
    }
}
