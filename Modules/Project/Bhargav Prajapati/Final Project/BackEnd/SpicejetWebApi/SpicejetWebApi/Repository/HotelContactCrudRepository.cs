using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class HotelContactCrudRepository : IHotelContactCrudRepository
    {
        private readonly ANGULARSPICEJETContext context;
        public HotelContactCrudRepository(ANGULARSPICEJETContext context)
        {
            this.context = context;
        }
        public void DeleteContect(int ContactId)
        {
            var data = context.HotelContectInfos.SingleOrDefault(s=>s.HotelContectId==ContactId);
            context.HotelContectInfos.Remove(data);
            context.SaveChanges();
        }

        public IEnumerable<HotelContectInfo> GetAllHotelContect()
        {
            return context.HotelContectInfos;
        }

        public void InsertContact(HotelContectInfo contact)
        {
            context.HotelContectInfos.Add(contact);
        }

        public void UpdateContact(int ContactId, HotelContectInfo contact)
        {
            var data = context.HotelContectInfos.SingleOrDefault(s => s.HotelContectId == ContactId);
            data.HotelMobileNumber = contact.HotelMobileNumber;
            data.HotelEmail = contact.HotelEmail;
            context.SaveChanges();
        }
    }
}
