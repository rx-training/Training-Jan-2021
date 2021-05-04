using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetApi.Models
{
    public partial class Guste
    {
        public Guste()
        {
            Payments = new HashSet<Payment>();
        }

        public int GustId { get; set; }
        public string GustName { get; set; }
        public string MobileNo { get; set; }
        public int NumberOfPerson { get; set; }
        public string EmailId { get; set; }
        public int AddressId { get; set; }

        public virtual Address Address { get; set; }
        public virtual ICollection<Payment> Payments { get; set; }
    }
}
