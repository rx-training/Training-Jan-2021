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
    public class EventVenuesController : ControllerBase
    {
        private readonly IEventVenue eventVenues;

        public EventVenuesController(IEventVenue context)
        {
            eventVenues = context;
        }

        // GET: api/BookMyShow/EventVenues
        [HttpGet]
        public ActionResult<IEnumerable<EventVenue>> GetEventVenues()
        {
            return Ok(eventVenues.GetAll());
        }

        // GET: api/BookMyShow/EventVenues/5
        [HttpGet("{id}")]
        public ActionResult<EventVenue> GetEventVenue(int id)
        {
            var eventVenue = eventVenues.GetById(id);

            if (eventVenue == null)
            {
                return NotFound();
            }

            return Ok(eventVenue);
        }

        // GET: api/BookMyShow/EventVenues/5/ShowTimings
        [HttpGet("{id}/ShowTimings")]
        public ActionResult<ShowTiming> GetShowTimings(int id)
        {
            var showTimings = eventVenues.GetShowTimingsById(id);

            if (showTimings == null)
            {
                return NotFound();
            }

            return Ok(showTimings);
        }

        // PUT: api/BookMyShow/EventVenues/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutEventVenue(EventVenueDTO eventVenue)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            eventVenues.UpdateEventVenue(eventVenue);

            return Ok();
        }

        // POST: api/BookMyShow/EventVenues
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<EventVenue> PostEventVenue(EventVenueDTO eventVenue)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            eventVenues.CreateEventVenue(eventVenue);

            return Ok();
        }

        // POST: api/BookMyShow/EventVenues/1/ShowTimings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/ShowTimings")]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<EventVenueShowTiming> PostEventVenueShowTimings(int id, [FromBody] string showTiming)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            eventVenues.CreateShowTimingById(id, showTiming);

            return Ok();
        }

        // DELETE: api/BookMyShow/EventVenues/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteEventVenue(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            eventVenues.Delete(id);

            return Ok();
        }

        // DELETE: api/BookMyShow/EventVenues/2/ShowTiming/10:00 AM
        [HttpDelete("{id}/ShowTiming/{showTime}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteShowTiming(int id, string showTime)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            eventVenues.DeleteShowTimingById(id, showTime);

            return Ok();
        }

    }
}
