using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Models
{
    [NotMapped]
    public class Response
    {
        public string Status { get; set; }
        public string Message { get; set; }
    }
}
