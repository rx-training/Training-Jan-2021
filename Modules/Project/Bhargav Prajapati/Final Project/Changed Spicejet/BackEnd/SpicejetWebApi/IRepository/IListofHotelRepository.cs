using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IListofHotelRepository
    {
        public IEnumerable<ListofHotelDetail> GetAlllist();
        public ListofHotelDetail GetHotelById(int listid);
        public void InsertHotelList(ListofHotelDetail list);
        public void UpdateListofhotel(int listid, ListofHotelDetail list);
        public void DeleteListofhotel(int listid);
    }
}
