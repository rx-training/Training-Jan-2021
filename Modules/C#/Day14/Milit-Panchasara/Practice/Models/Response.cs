using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Practice.Models
{
    [NotMapped]
    public class Response
    {
        public int Code { get; set; }
        public object Data { get; set; }
        public string Message { get; set; }
    }
}
