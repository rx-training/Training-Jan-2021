using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Assignment.Modals
{
    class Plants
    {
        [Key]
        public int PlantId { get; set; }
        public string PlantName{ get; set; }
        public string City { get; set; }

        public ICollection<Toys> Toys { get; set; }

    }
}
