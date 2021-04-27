using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.IRepository
{
    public interface IRegion : IGenericInterface<Region>
    {
        public IEnumerable GetCitiesById(int id);
    }
}
