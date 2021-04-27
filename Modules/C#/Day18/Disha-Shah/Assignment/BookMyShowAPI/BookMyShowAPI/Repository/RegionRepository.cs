using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class RegionRepository : GenericRepository<Region>, IRegion
    {
        public RegionRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Get all cities in a particular region
        public IEnumerable GetCitiesById(int id)
        {
            var cities = context.Cities
                            .Where(x => x.RegionId == id)
                            .Select(x=>new City 
                            {
                                CityId = x.CityId,
                                Name = x.Name,
                                RegionId = x.RegionId,
                                Region = new Region
                                {
                                    RegionId = x.Region.RegionId,
                                    Name = x.Region.Name
                                }
                            });

            return cities;
        }

    }
}
