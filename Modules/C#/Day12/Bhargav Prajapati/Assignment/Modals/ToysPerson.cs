using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Modals
{
    class ToysPerson
    {


        public int ToyId { get; set; }
        public Toys Toys { get; set; }

        public int CustomerId { get; set; }
        public Customer Customer { get; set; }

    }
}
