using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
     public interface IHotelInfoCrudRepository
    {
        public IEnumerable<HotelInfo> GetAllHotel();
        public void InsertHotel(HotelInfo hotel);
        public void UpdateHotel(int HotelId,HotelInfo hotel);
        public void DeleteHotel(int HotelId);

    }
}
