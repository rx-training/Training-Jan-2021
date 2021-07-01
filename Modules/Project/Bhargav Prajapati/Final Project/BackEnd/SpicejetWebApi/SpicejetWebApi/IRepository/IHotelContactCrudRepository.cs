using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IHotelContactCrudRepository
    {
        public IEnumerable<HotelContectInfo> GetAllHotelContect();
        public void InsertContact(HotelContectInfo contact );
        public void UpdateContact(int ContactId, HotelContectInfo contact);
        public void DeleteContect(int ContactId);

    }
}
