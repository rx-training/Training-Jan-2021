using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class HotelDetailsRepository : IHotelDetailsRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        public HotelDetailsRepository(ANGULARSPICEJETDbContext context)
        {
            this.context = context;
        }
        public void DeleteHotel(int hotelId)
        {
            var data = context.HotelDetails.SingleOrDefault(s=>s.HotelId==hotelId);
            context.HotelDetails.Remove(data);
            context.SaveChanges();
        }

        public IEnumerable<HotelDetail> GetAllHotel()
        {
            var data = context.HotelDetails;
            return data;
        }

        public HotelDetail GetHotelById(int hotelId)
        {
            var data = context.HotelDetails.SingleOrDefault(s => s.HotelId == hotelId);
            return data;
        }

        public void InsertHotel(HotelDetail hotel)
        {
            context.HotelDetails.Add(hotel);
            context.SaveChanges();
        }

        public void UpdateHotel(int hotelId, HotelDetail hotel)
        {
            var data = context.HotelDetails.SingleOrDefault(s => s.HotelId == hotelId);
            data.HotelName = hotel.HotelName;
            data.HotelCity = hotel.HotelCity;
            data.HotelState = hotel.HotelState;
            data.HotelAddress = hotel.HotelAddress;
            data.PinNumber = hotel.PinNumber;
            data.Rating = hotel.Rating;
            data.NumberOfRoomAvailable = hotel.NumberOfRoomAvailable;
            data.HotelContectNumber = hotel.HotelContectNumber;
            data.HotelEmailAddress = hotel.HotelEmailAddress;
            context.SaveChanges();


        }
    }
}
