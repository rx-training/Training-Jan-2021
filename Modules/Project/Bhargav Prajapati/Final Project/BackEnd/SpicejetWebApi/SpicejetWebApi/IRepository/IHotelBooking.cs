using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IHotelBooking
    {
        public IEnumerable<HotelUserDetail> GetAllUser();
        public void InserthotelUser(HotelUserDetail userDetail);
        public VBookingHotel GetUserByConformation(string conformation,string Email);
        public void DeleteHotelBooking(string Conformation);
        public void UpdateHotelRecord(string conformation, HotelUserDetail user);


    }
}
