using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day17Assignment.Models
{
    public class PatientDrugsTranscript
    {
        public int DrugId { get; set; }
        public string DrugName{ get; set; }
        public string DrugContent{ get; set; }
        public int Price{ get; set; }
        public int Expiry{ get; set; }
        public int Total_Drug_Price { get; set; }

    }
}
