using System;
using System.Collections.Generic;

#nullable disable

namespace Day10.Models
{
    public partial class Drug
    {
        public int DrugId { get; set; }
        public bool Morning { get; set; }
        public bool Afternoon { get; set; }
        public bool Night { get; set; }
        public bool Before { get; set; }
        public bool After { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
    }
}
