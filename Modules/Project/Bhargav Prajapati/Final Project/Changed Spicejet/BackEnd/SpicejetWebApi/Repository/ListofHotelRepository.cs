using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class ListofHotelRepository : IListofHotelRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        public ListofHotelRepository(ANGULARSPICEJETDbContext context)
        {
            this.context = context;
        }
        public void DeleteListofhotel(int listid)
        {
            var data = context.ListofHotelDetails.SingleOrDefault(s=>s.ListId==listid);
            context.ListofHotelDetails.Remove(data);
            context.SaveChanges();
        }

        public IEnumerable<ListofHotelDetail> GetAlllist()
        {
            return context.ListofHotelDetails;
        }

        public ListofHotelDetail GetHotelById(int listid)
        {
            var data = context.ListofHotelDetails.SingleOrDefault(s => s.ListId == listid);
            return data;
        }

        public void InsertHotelList(ListofHotelDetail list)
        {
            context.ListofHotelDetails.Add(list);
            context.SaveChanges();
        }

        public void UpdateListofhotel(int listid, ListofHotelDetail list)
        {
            var data = context.ListofHotelDetails.SingleOrDefault(s => s.ListId == listid);
            data.CostId = list.CostId;
            data.HotelId = list.HotelId;
            context.SaveChanges();
        }
    }
}
