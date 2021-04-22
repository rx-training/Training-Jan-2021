using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Assignment.Modals
{
    class Toys
    {
        [Key]
        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public int ToyPrice { get; set; }


        public Plants Plants { get; set; }
        public ICollection<ToysPerson> ToysPeople { get; set; }

    }
}
