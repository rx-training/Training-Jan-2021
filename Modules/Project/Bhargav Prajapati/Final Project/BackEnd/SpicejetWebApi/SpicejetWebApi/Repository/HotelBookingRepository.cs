using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class HotelBookingRepository : IHotelBooking
    {
        private readonly ANGULARSPICEJETContext context;
        public HotelBookingRepository(ANGULARSPICEJETContext context)
        {
            this.context = context;
        }
        public void DeleteHotelBooking(string Conformation)
        {
           var data= context.HotelUserDetails.SingleOrDefault(s=>s.UserReferenceNumumbar==Conformation);
            context.HotelUserDetails.Remove(data);
            context.SaveChanges();
        }

        public IEnumerable<HotelUserDetail> GetAllUser()
        {
            return context.HotelUserDetails;
        }

        public VBookingHotel GetUserByConformation(string conformation, string Email)
        {
            var data = context.VBookingHotels.SingleOrDefault(s=>s.UserReferenceNumumbar==conformation && s.UserEmail==Email);
            return data;
        }

        public void InserthotelUser(HotelUserDetail userDetail)
        {
            context.HotelUserDetails.Add(userDetail);
            context.SaveChanges();
        }

        public void UpdateHotelRecord(string conformation, HotelUserDetail user)
        {
            var data = context.HotelUserDetails.SingleOrDefault(s=>s.UserReferenceNumumbar==conformation);
            data.UserFirstName = user.UserFirstName;
            data.UserMiddleName = user.UserMiddleName;
            data.UserLastName = user.UserLastName;
            data.UserEmail = user.UserEmail;
            data.UserContectNumber = user.UserContectNumber;
            data.NumberOfGuest = user.NumberOfGuest;
            context.SaveChanges();

        }
    }
}
