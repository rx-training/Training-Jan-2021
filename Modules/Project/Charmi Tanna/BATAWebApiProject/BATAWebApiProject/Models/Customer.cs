using System;
using System.Collections.Generic;

#nullable disable

namespace BATAWebApiProject.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Carts = new HashSet<Cart>();
            Sales = new HashSet<Sale>();
        }

        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }
        public string CustomerPassword { get; set; }
        public decimal? CustomerMobile { get; set; }
        public string PhoneNumberCountryCode { get; set; }
        public string Gender { get; set; }
        public string Otp { get; set; }
        public decimal? ReferralCode { get; set; }
        public decimal? PinCode { get; set; }
        public string CustomerAddress { get; set; }
        public string Landmark { get; set; }
        public string City { get; set; }
        public string CustomerState { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Sale> Sales { get; set; }
    }
}
