using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class HotelInfoCrudRepository : IHotelInfoCrudRepository
    {
        private readonly ANGULARSPICEJETContext context;
        public HotelInfoCrudRepository(ANGULARSPICEJETContext context)
        {
            this.context = context;
        }
        public void DeleteHotel(int HotelId)
        {
            var data = context.HotelInfos.SingleOrDefault(s=>s.HotelId==HotelId);
            context.HotelInfos.Remove(data);
            context.SaveChanges();

        }

        public IEnumerable<HotelInfo> GetAllHotel()
        {
            return context.HotelInfos;
        }

        public void InsertHotel(HotelInfo hotel)
        {
            context.HotelInfos.Add(hotel);
            context.SaveChanges();
        }

        public void UpdateHotel(int HotelId, HotelInfo hotel)
        {
            var data = context.HotelInfos.SingleOrDefault(s => s.HotelId == HotelId);
            data.HotelName = hotel.HotelName;
            data.HotelState = hotel.HotelState;
            data.HotelCity = hotel.HotelCity;
            data.HotelAddress = hotel.HotelAddress;
            data.PinNumber = hotel.PinNumber;
            data.Rating = hotel.Rating;
            data.StartingTime = hotel.StartingTime;
            data.ClosingTime = hotel.ClosingTime;
            data.NoOfRoomAvailable = hotel.NoOfRoomAvailable;
            data.ContectId = hotel.ContectId;
            data.CostId = hotel.CostId;
            context.SaveChanges();
        }
    }
}
