﻿using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.IRepository
{
    public interface IEventVenue : IGenericInterface<EventVenue>
    {
        public IEnumerable GetAllVenues();
        public IEnumerable GetVenueById(int id);
        public IEnumerable GetShowTimingsById(int id);
        public void CreateEventVenue(EventVenueDTO eventVenue);
        public void UpdateEventVenue(EventVenueDTO entity);
        public void CreateShowTimingById(int id, string showTiming);
        public void DeleteShowTimingById(int id, string showTiming);
    }
}
