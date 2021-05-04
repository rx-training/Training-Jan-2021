using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ToyStoreApi.Models
{
    [NotMapped]
    public class vToysCategoy
    {
        public int ToyId { get; set; }
        public string ToyName { get; set; }

        public int price { get; set; }
        public int CategoryID { get; set; }
        public int ManufacturingPlantID { get; set; }
        public string Cname { get; set; }
    }
}
