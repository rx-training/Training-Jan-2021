using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.IRepository
{
    public interface IDynamicNavbar : IGenericInterface<DynamicNavbar>
    {
        public IEnumerable GetAllNavbars();
        public IEnumerable GetNavbarById(int id);
        public void CreateNavbar(DynamicNavbar entity);
    }
}
