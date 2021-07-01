using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace assignment1.Models.DbEntities.Main
{
    [NotMapped]
    public class FilterFields
    {
        public int LowerPrice { get; set; }
        public int HigherPrice { get; set; }
        public string Brand { get; set; }
        public string Size { get; set; }
        public string Category { get; set; }
        public string Color { get; set; }
        public string Gender { get; set; }
    }
}
