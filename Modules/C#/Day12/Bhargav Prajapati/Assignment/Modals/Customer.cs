using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Assignment.Modals
{
    class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public double ContectNumber { get; set; }



        public ICollection<Address> Addresses { get; set; }
        public ICollection<ToysPerson> ToysPeople { get; set; }


    }
}
