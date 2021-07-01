﻿using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class EventRepository : GenericRepository<Event>, IEvent
    {
        public EventRepository(BookMyShowDBContext context) : base(context)
        {

        }

        public IEnumerable GetAllUniqueEvents()
        {
            var events = context.Events.Where(x => x.IsActive == true);

            var e1 = from x in events
                     select new Event
                     {
                         About = x.About,
                         ArtistImage = x.ArtistImage,
                         ArtistName = x.ArtistName,
                         BackgroundImage = x.BackgroundImage,
                         DateOfEvent = x.DateOfEvent,
                         Disclaimer = x.Disclaimer,
                         EventId = x.EventId,
                         EventType = context.EventTypes.SingleOrDefault(e => e.EventTypeId == x.EventTypeId),
                         EventTypeId = x.EventTypeId,
                         FAQs = x.FAQs,
                         Image = x.Image,
                         MinAge = x.MinAge,
                         Name = x.Name,
                         Note = x.Note,
                         TermsAndConditions = x.TermsAndConditions,
                         TicketPrice = x.TicketPrice,
                         Time = x.Time,
                         EventLanguages = context.EventLanguages.Where(e => e.EventId == x.EventId).ToArray(),
                         EventVenueShowTimingId = x.EventVenueShowTimingId
                     };

            return e1;
        }

        // Get information of all events
        public IEnumerable GetAllEvents()
        {
            var events = context.VEvents;

            //var e1 = from x in events
            //         select new Event
            //         {
            //             EventId = x.EventId,
            //             EventType = x.EventType,
            //             EventTypeId = x.EventTypeId,
            //             Image = x.Image,
            //             DateOfEvent = x.DateOfEvent,
            //             Name = x.Name,
            //             TicketPrice = x.TicketPrice,
            //             Time = x.Time,
            //             EventLanguages = context.EventLanguages.Where(e => e.EventId == x.EventId).ToArray(),
            //             EventVenueShowTimingId = x.EventVenueShowTimingId,
            //             EventVenueShowTiming = x.EventVenueShowTiming,
            //         };


            //return e1;

            return events;
        }

        // Get information of a particular event
        public IEnumerable GetEventById(int id)
        {
            var events = context.VEvents
                                .Where(x => x.EventId == id)
                                .ToList();

            return events;
        }

        // Add event
        public void CreateEvent(EventDTO entity)
        {
            var eventType = context.EventTypes
                                .SingleOrDefault(x => x.EventType1 == entity.EventType);

            var eventVenue = context.EventVenues
                                    .SingleOrDefault(x => x.Name == entity.EventVenue);

            TimeSpan ts = DateTime.Parse(entity.ShowTime).TimeOfDay;

            var showTiming = context.ShowTimings
                                .SingleOrDefault(x => x.ShowTime == ts);

            var eventVenueShowTiming = context.EventVenueShowTimings
                                            .SingleOrDefault(x => x.EventVenueId == eventVenue.EventVenueId && x.ShowTimingId == showTiming.ShowTimingId);

            context.Events.Add(new Event()
            {
                Name = entity.Name,
                Image = entity.Image,
                TicketPrice = entity.TicketPrice,
                Time = entity.Time,
                DateOfEvent = entity.DateOfEvent,
                EventTypeId = eventType.EventTypeId,
                EventVenueShowTimingId= eventVenueShowTiming.EventVenueShowTimingId,
                About = entity.About,
                ArtistImage = entity.ArtistImage,
                ArtistName = entity.ArtistName,
                BackgroundImage = entity.BackgroundImage,
                Disclaimer = entity.Disclaimer,
                FAQs = entity.FAQs,
                MinAge = entity.MinAge,
                Note = entity.Note,
                TermsAndConditions = entity.TermsAndConditions,
                IsActive = true
            });

            context.SaveChanges();

            var events = context.Events.ToList();
            var totalEvents = events.Count();
            var eventId = events[totalEvents - 2].EventId;

            foreach (var item in entity.Languages)
            {
                var lang = context.Languages.SingleOrDefault(x => x.Language1 == item);

                context.EventLanguages.Add(new EventLanguage()
                {
                    EventId = eventId + 1,
                    LanguageId = lang.LanguageId
                });

                context.SaveChanges();
            }
        }

        // Update event
        public void UpdateEvent(EventDTO entity)
        {
            var eventType = context.EventTypes
                                .SingleOrDefault(x => x.EventType1 == entity.EventType);

            var eventVenue = context.EventVenues
                                    .SingleOrDefault(x => x.Name == entity.EventVenue);

            TimeSpan ts = DateTime.Parse(entity.ShowTime).TimeOfDay;

            var showTiming = context.ShowTimings
                                .SingleOrDefault(x => x.ShowTime == ts);

            var eventVenueShowTiming = context.EventVenueShowTimings
                                            .SingleOrDefault(x => x.EventVenueId == eventVenue.EventVenueId && x.ShowTimingId == showTiming.ShowTimingId);


            var existingEvent = context.Events.Where(s => s.EventId == entity.EventId)
                                                    .SingleOrDefault<Event>();

            existingEvent.Name = entity.Name;
            existingEvent.Image = entity.Image;
            existingEvent.TicketPrice = entity.TicketPrice;
            existingEvent.Time = entity.Time;
            existingEvent.DateOfEvent = entity.DateOfEvent;
            existingEvent.EventTypeId = eventType.EventTypeId;
            existingEvent.EventVenueShowTimingId = eventVenueShowTiming.EventVenueShowTimingId;
            existingEvent.Disclaimer = entity.Disclaimer;
            existingEvent.BackgroundImage = entity.BackgroundImage;
            existingEvent.ArtistName = entity.ArtistName;
            existingEvent.ArtistImage = entity.ArtistImage;
            existingEvent.About = entity.About;
            existingEvent.FAQs = entity.FAQs;
            existingEvent.MinAge = entity.MinAge;
            existingEvent.Note = entity.Note;
            existingEvent.TermsAndConditions = entity.TermsAndConditions;
            existingEvent.IsActive = true;

            context.SaveChanges();

            var existingLang = context.EventLanguages.Where(x => x.EventId == entity.EventId).ToList();

            context.EventLanguages.RemoveRange(existingLang);
            context.SaveChanges();

            foreach (var item in entity.Languages)
            {
                var gen = context.Languages.SingleOrDefault(x => x.Language1 == item);

                context.EventLanguages.Add(new EventLanguage()
                {
                    EventId = entity.EventId,
                    LanguageId = gen.LanguageId
                });

                context.SaveChanges();
            }

        }

        // Delete event
        public override void Delete(int id)
        {
            var entity = context.Events
                .Where(s => s.EventId== id)
                .SingleOrDefault();

            //context.Events.Remove(entity);
            entity.IsActive = false;
            context.SaveChanges();
        }

        // Get events by language
        public IEnumerable GetEventsByLangugage(string language)
        {
            var events = context.VEvents
                                .Where(x => x.Language == language)
                                .ToList();

            return events;
        }

        //Add Language for an Event
        public void CreateEventLanguages(int id, string language)
        {
            var lang = context.Languages.SingleOrDefault(x => x.Language1 == language);

            context.EventLanguages.Add(new EventLanguage()
            {
                EventId = id,
                LanguageId = lang.LanguageId
            });

            context.SaveChanges();
        }

        //Delete Language for an event
        public void DeleteEventLanguages(int id, string language)
        {
            var lang = context.Languages.SingleOrDefault(x => x.Language1 == language);

            var eventLanguage = context.EventLanguages
                .Where(s => s.EventId == id && s.LanguageId == lang.LanguageId)
                .SingleOrDefault();

            context.EventLanguages.Remove(eventLanguage);
            context.SaveChanges();
        }

        // Get information of all activities
        public IEnumerable GetAllActivities()
        {
            var activities = context.Activities.ToList();

            return activities;
        }

        // Get information of a particular activity based on its name
        public IEnumerable GetActivityByName(string activity)
        {
            var activities = context.Activities
                                .Where(x => x.Event == activity)
                                .ToList();

            return activities;
        }

        // Get information of a particular activity based on city
        public IEnumerable GetActivityByCity(string city)
        {
            var activities = context.Activities
                                .Where(x => x.City == city)
                                .ToList();

            return activities;
        }

        // Get information of all comedy events
        public IEnumerable GetAllComedys()
        {
            var comedies = context.Comedys.ToList();

            return comedies;
        }

        // Get information of a particular comedy events based on its name
        public IEnumerable GetComedyByName(string comedy)
        {
            var comedies = context.Comedys
                                .Where(x => x.Event == comedy)
                                .ToList();

            return comedies;
        }

        // Get information of a particular comedy events based on city
        public IEnumerable GetComedyByCity(string city)
        {
            var comedies = context.Comedys
                                .Where(x => x.City == city)
                                .ToList();

            return comedies;
        }

        // Get information of all outdoor events
        public IEnumerable GetAllOutdoors()
        {
            var outdoors = context.Outdoors.ToList();

            return outdoors;
        }

        // Get information of a particular outdoor events based on its name
        public IEnumerable GetOutdoorsByName(string outdoor)
        {
            var outdoors = context.Outdoors
                                .Where(x => x.Event == outdoor)
                                .ToList();

            return outdoors;
        }

        // Get information of a particular outdoor events based on city
        public IEnumerable GetOutdoorsByCity(string city)
        {
            var outdoors = context.Outdoors
                                .Where(x => x.City == city)
                                .ToList();

            return outdoors;
        }

        // Get information of all plays
        public IEnumerable GetAllPlays()
        {
            var plays = context.Plays.ToList();

            return plays;
        }

        // Get information of a particular plays based on its name
        public IEnumerable GetPlaysByName(string play)
        {
            var plays = context.Plays
                                .Where(x => x.Event == play)
                                .ToList();

            return plays;
        }

        // Get information of a particular plays based on city
        public IEnumerable GetPlaysByCity(string city)
        {
            var plays = context.Plays
                                .Where(x => x.City == city)
                                .ToList();

            return plays;
        }

        // Get information of all popular events
        public IEnumerable GetAllPopulars()
        {
            var populars = context.Populars.ToList();

            return populars;
        }

        // Get information of a particular popular events based on its name
        public IEnumerable GetPopularsByName(string popular)
        {
            var populars = context.Populars
                                .Where(x => x.Event == popular)
                                .ToList();

            return populars;
        }

        // Get information of a particular popular events based on city
        public IEnumerable GetPopularsByCity(string city)
        {
            var populars = context.Populars
                                .Where(x => x.City == city)
                                .ToList();

            return populars;
        }

        // Get information of all sports events
        public IEnumerable GetAllSports()
        {
            var sports = context.Sports.ToList();

            return sports;
        }

        // Get information of a particular sports events based on its name
        public IEnumerable GetSportsByName(string sport)
        {
            var sports = context.Sports
                                .Where(x => x.Event == sport)
                                .ToList();

            return sports;
        }

        // Get information of a particular sports events based on city
        public IEnumerable GetSportsByCity(string city)
        {
            var sports = context.Sports
                                .Where(x => x.City == city)
                                .ToList();

            return sports;
        }

        public IEnumerable GetActivitiesByPrice(int min, int max)
        {
            var events = context.Activities
                                    .Where(x => x.TicketPrice >= min && x.TicketPrice <= max);

            return events;
        }

        public IEnumerable GetComedyByPrice(int min, int max)
        {
            var events = context.Comedys
                                    .Where(x => x.TicketPrice >= min && x.TicketPrice <= max);

            return events;
        }

        public IEnumerable GetOutdoorsByPrice(int min, int max)
        {
            var events = context.Outdoors
                                    .Where(x => x.TicketPrice >= min && x.TicketPrice <= max);

            return events;
        }

        public IEnumerable GetPlaysByPrice(int min, int max)
        {
            var events = context.Plays
                                    .Where(x => x.TicketPrice >= min && x.TicketPrice <= max);

            return events;
        }

        public IEnumerable GetPopularsByPrice(int min, int max)
        {
            var events = context.Populars
                                    .Where(x => x.TicketPrice >= min && x.TicketPrice <= max);

            return events;
        }

        public IEnumerable GetSportsByPrice(int min, int max)
        {
            var events = context.Sports
                                    .Where(x => x.TicketPrice >= min && x.TicketPrice <= max);

            return events;
        }
    }
}
