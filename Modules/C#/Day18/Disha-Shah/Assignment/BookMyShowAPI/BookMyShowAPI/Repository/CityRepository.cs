using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class CityRepository : GenericRepository<City>, ICity
    {
        public CityRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Add city
        public override void Create(City city)
        {
            var region = context.Regions.SingleOrDefault(x => x.Name == city.Region.Name);

            context.Cities.Add(new City()
            {
                Name = city.Name,
                RegionId = region.RegionId
            });

            context.SaveChanges();
        }

        // Update city
        public override void Update(int id, City entity)
        {
            var region = context.Regions.SingleOrDefault(x => x.Name == entity.Region.Name);

            var existingCity = context.Cities.Where(s => s.CityId == id)
                                                    .SingleOrDefault<City>();

            existingCity.Name = entity.Name;
            existingCity.RegionId = region.RegionId;

            context.SaveChanges();

        }

        // Delete city
        public override void Delete(int id)
        {
            var city = context.Cities
                .Where(s => s.CityId == id)
                .SingleOrDefault();

            context.Cities.Remove(city);
            context.SaveChanges();
        }

        // Get all theatres in a particular city
        public IEnumerable GetTheatresById(int id)
        {
            var theatres = context.Theatres.Where(x => x.CityId == id)
                                            .Select(x => new Theatre
                                            {
                                                TheatreId = x.TheatreId,
                                                Name = x.Name,
                                                Address = x.Address,
                                                CityId = x.CityId,
                                                City = new City
                                                {
                                                    CityId = x.City.CityId,
                                                    Name = x.City.Name
                                                }
                                            });

            return theatres;
                                                    
        }

        // Get all eventvenues by particular city
        public IEnumerable GetEventVenuesById(int id)
        {
            var eventVenues = context.EventVenues.Where(x => x.CityId == id)
                                            .Select(x => new EventVenue
                                            {
                                                EventVenueId = x.EventVenueId,
                                                Name = x.Name,
                                                Address = x.Address,
                                                CityId = x.CityId,
                                                TotalTickets=x.TotalTickets,
                                                City = new City
                                                {
                                                    CityId = x.City.CityId,
                                                    Name = x.City.Name
                                                }
                                            });

            return eventVenues;
        }
    }
}
