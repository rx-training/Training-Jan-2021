using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Practice_Exercise.Modals
{
    class Address
    {
        [Key]
        public int AddressId { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string Zip { get; set; }
        public string City { get; set; }

        public int AddressOfId { get; set; }
        public Student Student { get; set; }
    }
}
