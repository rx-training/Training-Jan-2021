using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class UserAddress
    {
        public int UserAddressId { get; set; }
        public int UserId { get; set; }
        public string UserAddressFullName { get; set; }
        public string UserAdressContact { get; set; }
        public string AddressType { get; set; }
        public string UserAddressDetail { get; set; }
        public int UserCityId { get; set; }

        public virtual User User { get; set; }
        public virtual City UserCity { get; set; }
    }
}
