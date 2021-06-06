using BookMyShowAPI.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.IRepository
{
    public interface IEvent : IGenericInterface<Event>
    {
        public IEnumerable GetAllUniqueEvents();
        public IEnumerable GetAllEvents();
        public IEnumerable GetEventById(int id);

        public void CreateEvent(Event entity, string showTime);
        public void UpdateEvent(int id, string showTime, Event entity);

        public IEnumerable GetEventsByLangugage(string language);
        public void CreateEventLanguages(int id, string language);
        public void DeleteEventLanguages(int id, string language);

        public IEnumerable GetAllActivities();
        public IEnumerable GetActivityByName(string activity);
        public IEnumerable GetActivityByCity(string city);
        public IEnumerable GetActivitiesByPrice(int min, int max);

        public IEnumerable GetAllComedys();
        public IEnumerable GetComedyByName(string comedy);
        public IEnumerable GetComedyByCity(string city);
        public IEnumerable GetComedyByPrice(int min, int max);

        public IEnumerable GetAllOutdoors();
        public IEnumerable GetOutdoorsByName(string outdoor);
        public IEnumerable GetOutdoorsByCity(string city);
        public IEnumerable GetOutdoorsByPrice(int min, int max);

        public IEnumerable GetAllPlays();
        public IEnumerable GetPlaysByName(string play);
        public IEnumerable GetPlaysByCity(string city);
        public IEnumerable GetPlaysByPrice(int min, int max);

        public IEnumerable GetAllPopulars();
        public IEnumerable GetPopularsByName(string popular);
        public IEnumerable GetPopularsByCity(string city);
        public IEnumerable GetPopularsByPrice(int min, int max);

        public IEnumerable GetAllSports();
        public IEnumerable GetSportsByName(string sport);
        public IEnumerable GetSportsByCity(string city);
        public IEnumerable GetSportsByPrice(int min, int max);
    }
}
