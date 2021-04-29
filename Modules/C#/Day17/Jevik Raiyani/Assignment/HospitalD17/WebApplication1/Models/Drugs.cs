using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Drugs
    {
        public int Id { get; set; }
        public string DrugName { get; set; }
        public int DrugPrice { get; set; }

        public ICollection<Patients> Patients { get; set; }


    }
}
