using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class City
    {
        public City()
        {
            SellerAddresses = new HashSet<SellerAddress>();
            SellerDeliverables = new HashSet<SellerDeliverable>();
            UserAddresses = new HashSet<UserAddress>();
        }

        public int CityId { get; set; }
        public string CityName { get; set; }
        public int StateId { get; set; }

        public virtual State State { get; set; }
        public virtual ICollection<SellerAddress> SellerAddresses { get; set; }
        public virtual ICollection<SellerDeliverable> SellerDeliverables { get; set; }
        public virtual ICollection<UserAddress> UserAddresses { get; set; }
    }
}
