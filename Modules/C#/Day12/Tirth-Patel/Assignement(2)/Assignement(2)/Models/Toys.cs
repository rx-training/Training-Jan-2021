
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Microsoft.EntityFrameworkCore;
namespace Assignement_2_.Models
{
    public class Toys
    {
        [Key]
        public int ToyID { get; set; }
      
        public String Name { get; set; }
        public int Price { get; set; }
        public Categories Categories { get; set; }
    }
}
