

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Microsoft.EntityFrameworkCore;
namespace Assignement_2_.Models { 
    public class Plants
    {
        [Key]
        public int ManufacuringPlantID { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
    }
}

