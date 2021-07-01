using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections;
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

        public IEnumerable GetAllNavbars()
        {
            var navbars = context.DynamicNavbars.Where(x => x.IsActive == true);
            return navbars;
        }

        public IEnumerable GetNavbarById(int id)
        {
            var navbar = context.DynamicNavbars.Where(x => x.NavbarId == id && x.IsActive == true);
            return navbar;
        }

        public void CreateNavbar(DynamicNavbar entity)
        {
            context.DynamicNavbars.Add(new DynamicNavbar
            {
                Name = entity.Name,
                IsActive = true
            });
            context.SaveChanges();
        }

        public override void Delete(int id)
        {
            var navbarId = context.DynamicNavbars.SingleOrDefault(x => x.NavbarId == id);

            //context.Remove(navbarId);
            navbarId.IsActive = false;
            context.SaveChanges();
        }
    }
}
