using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections;
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

        public IEnumerable GetAllVenues()
        {
            var venues = context.EventVenues.Where(x => x.IsActive == true);
            return venues;
        }
        public IEnumerable GetVenueById(int id)
        {
            var venues = context.EventVenues.Where(x => x.IsActive == true && x.EventVenueId == id);
            return venues;
        }

        // Add EventVenues
        public void CreateEventVenue(EventVenueDTO eventVenue)
        {
            var city = context.Cities.SingleOrDefault(x => x.Name == eventVenue.City);

            context.EventVenues.Add(new EventVenue()
            {
                Name=eventVenue.Name,
                Address = eventVenue.Address,
                TotalTickets = eventVenue.TotalTickets,
                CityId=city.CityId,
                IsActive = true
            });

            context.SaveChanges();

            var venues = context.EventVenues.ToList();
            var totalVenues = venues.Count();
            var venueId = venues[totalVenues - 2].EventVenueId;

            TimeSpan ts = DateTime.Parse(eventVenue.ShowTime).TimeOfDay;

            var showTime = context.ShowTimings
                                .SingleOrDefault(x => x.ShowTime == ts);

            context.EventVenueShowTimings.Add(new EventVenueShowTiming()
            {
                EventVenueId = venueId + 1,
                ShowTimingId = showTime.ShowTimingId
            });

            context.SaveChanges();
        }

        // Update EventVenues
        public void UpdateEventVenue(EventVenueDTO entity)
        {
            var city = context.Cities.SingleOrDefault(x => x.Name == entity.City);

            var existingEventVenue = context.EventVenues.Where(s => s.EventVenueId == entity.EventVenueId)
                                                    .SingleOrDefault<EventVenue>();

            existingEventVenue.Name = entity.Name;
            existingEventVenue.Address = entity.Address;
            existingEventVenue.TotalTickets = entity.TotalTickets;
            existingEventVenue.CityId = city.CityId;
            existingEventVenue.IsActive = true;

            context.SaveChanges();

        }

        // Delete EventVenues
        public override void Delete(int id)
        {
            var eventVenue = context.EventVenues
                .Where(s => s.EventVenueId == id)
                .SingleOrDefault();

            //context.EventVenues.Remove(eventVenue);
            eventVenue.IsActive = false;
            context.SaveChanges();
        }

        public IEnumerable GetShowTimingsById(int id)
        {
            var showTimings = context.VEventVenuesShowtimes
                                .Where(x => x.EventVenueId == id);

            return showTimings;
        }

        public void CreateShowTimingById(int id, string showTiming)
        {
            TimeSpan ts = DateTime.Parse(showTiming).TimeOfDay;

            var showTime = context.ShowTimings
                                .SingleOrDefault(x => x.ShowTime == ts);

            context.EventVenueShowTimings.Add(new EventVenueShowTiming()
            {
                EventVenueId=id,
                ShowTimingId = showTime.ShowTimingId
            });

            context.SaveChanges();
        }

        public void DeleteShowTimingById(int id, string showTiming)
        {
            TimeSpan ts = DateTime.Parse(showTiming).TimeOfDay;

            var showTime = context.ShowTimings
                                .SingleOrDefault(x => x.ShowTime == ts);

            var eventVenueShowTiming = context.EventVenueShowTimings
                .Where(s => s.EventVenueId== id && s.ShowTimingId == showTime.ShowTimingId)
                .SingleOrDefault();

            context.EventVenueShowTimings.Remove(eventVenueShowTiming);
            context.SaveChanges();
        }
    }
}
