using System;
using System.Collections.Generic;

#nullable disable

namespace AmazonDemo.Models
{
    public partial class User
    {
        public User()
        {
            Carts = new HashSet<Cart>();
            Orders = new HashSet<Order>();
            PlacedOrders = new HashSet<PlacedOrder>();
            UserAddresses = new HashSet<UserAddress>();
        }

        public int UserId { get; set; }
        public string UserFirstName { get; set; }
        public string UserMiddleName { get; set; }
        public string UserLastName { get; set; }
        public string UserLogIn { get; set; }
        public string UserPassword { get; set; }
        public string UserContactNo { get; set; }
        public string UserEmail { get; set; }
        public DateTime UserBirthDate { get; set; }
        public DateTime? UserDate { get; set; }

        public virtual ICollection<Cart> Carts { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
        public virtual ICollection<PlacedOrder> PlacedOrders { get; set; }
        public virtual ICollection<UserAddress> UserAddresses { get; set; }
    }
}
