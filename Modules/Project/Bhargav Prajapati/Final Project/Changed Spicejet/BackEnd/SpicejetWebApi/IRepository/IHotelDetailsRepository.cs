using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IHotelDetailsRepository
    {
        public IEnumerable<HotelDetail> GetAllHotel();
        public HotelDetail GetHotelById(int hotelId);
        public void UpdateHotel(int hotelId, HotelDetail hotel);
        public void InsertHotel(HotelDetail hotel);
        public void DeleteHotel(int hotelId);
    }
}
