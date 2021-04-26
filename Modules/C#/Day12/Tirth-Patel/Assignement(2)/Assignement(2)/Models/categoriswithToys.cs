using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Assignement_2_.Models
{
    [NotMapped]
    public class categoriswithToys
    {
        
       
        public int CategoryID { get; set; }
        public string C_Name { get; set; }
        public int ManufacturingPlantID { get; set; }
        public int ToyID { get; set; }
      
        public String Name { get; set; }
        public int Price { get; set; }
    }
}
