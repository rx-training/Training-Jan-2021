using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class DynamicNavbarRepository : GenericRepository<DynamicNavbar>, IDynamicNavbar
    {
        public DynamicNavbarRepository(BookMyShowDBContext context) : base(context)
        {

        }

        public override void Delete(int id)
        {
            var navbarId = context.DynamicNavbars.SingleOrDefault(x => x.NavbarId == id);

            context.Remove(navbarId);
            context.SaveChanges();
        }
    }
}
