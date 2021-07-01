using System;
using System.Collections.Generic;

#nullable disable

namespace SpicejetWebApi.Models
{
    public partial class HotelUserDetail
    {
        public int UserId { get; set; }
        public string UserReferenceNumumbar { get; set; }
        public string UserFirstName { get; set; }
        public string UserMiddleName { get; set; }
        public string UserLastName { get; set; }
        public string UserEmail { get; set; }
        public double UserContectNumber { get; set; }
        public int NumberOfGuest { get; set; }
        public int CostId { get; set; }
        public int HotelId { get; set; }
        public int ContectId { get; set; }

        public virtual HotelContectInfo Contect { get; set; }
        public virtual CostDetail Cost { get; set; }
        public virtual HotelInfo Hotel { get; set; }
    }
}
