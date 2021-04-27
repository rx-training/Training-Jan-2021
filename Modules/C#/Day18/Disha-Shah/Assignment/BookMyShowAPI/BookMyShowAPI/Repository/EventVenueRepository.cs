using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class EventVenueRepository : GenericRepository<EventVenue>, IEventVenue
    {
        public EventVenueRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Add EventVenues
        public override void Create(EventVenue eventVenue)
        {
            var city = context.Cities.SingleOrDefault(x => x.Name == eventVenue.City.Name);

            context.EventVenues.Add(new EventVenue()
            {
                Name=eventVenue.Name,
                Address = eventVenue.Address,
                TotalTickets = eventVenue.TotalTickets,
                CityId=city.CityId
            });

            context.SaveChanges();
        }

        // Update EventVenues
        public override void Update(int id, EventVenue entity)
        {
            var city = context.Cities.SingleOrDefault(x => x.Name == entity.City.Name);

            var existingEventVenue = context.EventVenues.Where(s => s.EventVenueId == id)
                                                    .SingleOrDefault<EventVenue>();

            existingEventVenue.Name = entity.Name;
            existingEventVenue.Address = entity.Address;
            existingEventVenue.TotalTickets = entity.TotalTickets;
            existingEventVenue.CityId = city.CityId;

            context.SaveChanges();

        }

        // Delete EventVenues
        public override void Delete(int id)
        {
            var eventVenue = context.EventVenues
                .Where(s => s.EventVenueId == id)
                .SingleOrDefault();

            context.EventVenues.Remove(eventVenue);
            context.SaveChanges();
        }

    }
}
