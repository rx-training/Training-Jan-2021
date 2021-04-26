

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Microsoft.EntityFrameworkCore;
namespace Assignement_2_.Models
{
    public class Categories
    {
        [Key]
        public int CategoryID { get; set; }
        public string C_Name { get; set; }
        public int ManufacturingPlantID { get; set; }
        public ICollection<Toys> Toys { get; set; }
    }
}
