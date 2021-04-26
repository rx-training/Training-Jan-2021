using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Assignment.Modals
{
    class Address
    {
        [Key]
        public int AddressId { get; set; }
        public string street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public double Zip { get; set; }


        public int CustomerId { get; set; } 
        public Customer Customer { get; set; }
    }
}
