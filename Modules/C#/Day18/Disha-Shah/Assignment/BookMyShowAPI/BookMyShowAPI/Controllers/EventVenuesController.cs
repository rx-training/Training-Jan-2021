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
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<EventVenue>> GetEventVenues()
        {
            return Ok(eventVenues.GetAll());
        }

        // GET: api/BookMyShow/EventVenues/5
        [Authorize]
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

        // PUT: api/BookMyShow/EventVenues/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutEventVenue(int id, EventVenue eventVenue)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            eventVenues.Update(id, eventVenue);

            return Ok();
        }

        // POST: api/BookMyShow/EventVenues
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<EventVenue> PostEventVenue(EventVenue eventVenue)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            eventVenues.Create(eventVenue);

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
    }
}
