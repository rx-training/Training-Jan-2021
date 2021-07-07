using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IHotelUserBookingRepository
    {
        public IEnumerable<UserHotelBookingDetail> GetAllBooking();
        public UserHotelBookingDetail GetAllUserByConformationNumber(string ConformationNumber);
        public void InsertUser(UserHotelBookingDetail userHotel);
        public void UpdateUser(int UserId,UserHotelBookingDetail userHotel);
        public void DeleteUser(int UserId);


    }
}
