using BookMyShowAPI.Authentication;
using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Controllers
{
    [Route("api/BookMyShow/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly IEvent events;

        public EventsController(IEvent context)
        {
            events = context;
        }

        [HttpGet("UniqueEvents")]
        public ActionResult<IEnumerable<Event>> GetUniqueEvents()
        {
            return Ok(events.GetAllUniqueEvents());
        }

        // GET: api/BookMyShow/Events
        [HttpGet]
        public ActionResult<IEnumerable<Event>> GetEvents()
        {
            return Ok(events.GetAllEvents());
        }

        // GET: api/BookMyShow/Events/5
        [HttpGet("{id}")]
        public ActionResult<Event> GetEvents(int id)
        {
            var entity = events.GetEventById(id);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // GET: api/BookMyShow/Events/Activities
        [HttpGet("Activities")]
        public ActionResult<IEnumerable<Activity>> GetActivities()
        {
            return Ok(events.GetAllActivities());
        }

        // GET: api/BookMyShow/Events/Activities/Sunday Brunch
        [HttpGet("Activities/{activity}")]
        public ActionResult<Activity> GetActivitiesByName(string activity)
        {
            var entity = events.GetActivityByName(activity);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // GET: api/BookMyShow/Events/Activities/Cities/Ahmedabad
        [HttpGet("Activities/Cities/{city}")]
        public ActionResult<Activity> GetActivitiesByCity(string city)
        {
            var entity = events.GetActivityByCity(city);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        [HttpGet("Activities/Price/{min}/{max}")]
        public ActionResult<IEnumerable<Activity>> GetActivityByPrice(int min, int max)
        {
            var entity = events.GetActivitiesByPrice(min, max);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }


        // GET: api/BookMyShow/Events/Comedies
        [HttpGet("Comedies")]
        public ActionResult<IEnumerable<Comedy>> GetComedies()
        {
            return Ok(events.GetAllComedys());
        }

        // GET: api/BookMyShow/Events/Comedies/Laughter Show
        [HttpGet("Comedies/{comedy}")]
        public ActionResult<Comedy> GetComediesByName(string comedy)
        {
            var entity = events.GetComedyByName(comedy);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // GET: api/BookMyShow/Events/Comedies/Cities/Ahmedabad
        [HttpGet("Comedies/Cities/{city}")]
        public ActionResult<Comedy> GetComediesByCity(string city)
        {
            var entity = events.GetComedyByCity(city);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        [HttpGet("Comedies/Price/{min}/{max}")]
        public ActionResult<IEnumerable<Comedy>> GetComediesByPrice(int min, int max)
        {
            var entity = events.GetComedyByPrice(min, max);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // GET: api/BookMyShow/Events/Outdoors
        [HttpGet("Outdoors")]
        public ActionResult<IEnumerable<Outdoor>> GetOutdoors()
        {
            return Ok(events.GetAllOutdoors());
        }

        // GET: api/BookMyShow/Events/Outdoors/Outdoor Show
        [HttpGet("Outdoors/{outdoor}")]
        public ActionResult<Outdoor> GetOutdoorByName(string outdoor)
        {
            var entity = events.GetOutdoorsByName(outdoor);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // GET: api/BookMyShow/Events/Outdoors/Cities/Ahmedabad
        [HttpGet("Outdoors/Cities/{city}")]
        public ActionResult<Outdoor> GetOutdoorByCity(string city)
        {
            var entity = events.GetOutdoorsByCity(city);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        [HttpGet("Outdoors/Price/{min}/{max}")]
        public ActionResult<IEnumerable<Outdoor>> GetOutdoorByPrice(int min, int max)
        {
            var entity = events.GetOutdoorsByPrice(min, max);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // GET: api/BookMyShow/Events/Plays
        [HttpGet("Plays")]
        public ActionResult<IEnumerable<Play>> GetPlays()
        {
            return Ok(events.GetAllPlays());
        }

        // GET: api/BookMyShow/Events/Plays/Tholu Bommata
        [HttpGet("Plays/{play}")]
        public ActionResult<Play> GetPlayByName(string play)
        {
            var entity = events.GetPlaysByName(play);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // GET: api/BookMyShow/Events/Plays/Cities/Ahmedabad
        [HttpGet("Plays/Cities/{city}")]
        public ActionResult<Play> GetPlayByCity(string city)
        {
            var entity = events.GetPlaysByCity(city);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        [HttpGet("Plays/Price/{min}/{max}")]
        public ActionResult<IEnumerable<Play>> GetPlayByPrice(int min, int max)
        {
            var entity = events.GetPlaysByPrice(min, max);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // GET: api/BookMyShow/Events/Populars
        [HttpGet("Populars")]
        public ActionResult<IEnumerable<Popular>> GetPopulars()
        {
            return Ok(events.GetAllPopulars());
        }

        // GET: api/BookMyShow/Events/Populars/Outdoor Show
        [HttpGet("Populars/{popular}")]
        public ActionResult<Outdoor> GetPopularByName(string popular)
        {
            var entity = events.GetPopularsByName(popular);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // GET: api/BookMyShow/Events/Populars/Cities/Ahmedabad
        [HttpGet("Populars/Cities/{city}")]
        public ActionResult<Popular> GetPopularByCity(string city)
        {
            var entity = events.GetPopularsByCity(city);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        [HttpGet("Populars/Price/{min}/{max}")]
        public ActionResult<IEnumerable<Popular>> GetPopularByPrice(int min, int max)
        {
            var entity = events.GetPopularsByPrice(min, max);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // GET: api/BookMyShow/Events/Sports
        [HttpGet("Sports")]
        public ActionResult<IEnumerable<Sport>> GetSports()
        {
            return Ok(events.GetAllSports());
        }

        // GET: api/BookMyShow/Events/Sports/Cricket Match
        [HttpGet("Sports/{sport}")]
        public ActionResult<Outdoor> GetSportByName(string sport)
        {
            var entity = events.GetSportsByName(sport);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // GET: api/BookMyShow/Events/Sports/Cities/Ahmedabad
        [HttpGet("Sports/Cities/{city}")]
        public ActionResult<Sport> GetSportByCity(string city)
        {
            var entity = events.GetSportsByCity(city);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        [HttpGet("Sports/Price/{min}/{max}")]
        public ActionResult<IEnumerable<Sport>> GetSportByPrice(int min, int max)
        {
            var entity = events.GetSportsByPrice(min, max);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }

        // Get: api/BookMyShow/Events/Languages/English
        [HttpGet("Languages/{language}")]
        public ActionResult<IEnumerable<Event>> GetEventByLanguage(string language)
        {
            return Ok(events.GetEventsByLangugage(language));
        }

        // PUT: api/BookMyShow/Events/5/ShowTimes/03:00 PM
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}/ShowTimes/{showTime}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutEvent(int id, string showTime, Event entity)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            events.UpdateEvent(id, showTime, entity);

            return Ok();
        }

        // POST: api/BookMyShow/Events/ShowTimes/03:00 PM
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("ShowTimes/{showTime}")]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<Event> PostEvent(Event entity, string showTime)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            events.CreateEvent(entity, showTime);

            return Ok();
        }

        // POST: api/BookMyShow/Events/1/Languages
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/Languages")]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<EventLanguage> PostEventLanguages(int id, [FromBody] string language)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            events.CreateEventLanguages(id, language);

            return Ok();
        }

        // DELETE: api/BookMyShow/Events/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteEvent(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            events.Delete(id);

            return Ok();
        }

        // DELETE: api/BookMyShow/Events/5/Languages/English
        [HttpDelete("{id}/Languages/{language}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteEventLanguage(int id, string language)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            events.DeleteEventLanguages(id, language);

            return Ok();
        }
    }
}
