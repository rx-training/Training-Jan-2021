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
    public class EventTypesController : ControllerBase
    {
        private readonly IEventType eventTypes;

        public EventTypesController(IEventType context)
        {
            eventTypes = context;
        }

        // GET: api/BookMyShow/EventTypes
        [HttpGet]
        public ActionResult<IEnumerable<EventType>> GetEventTypes()
        {
            return Ok(eventTypes.GetAll());
        }

        // GET: api/BookMyShow/EventTypes/5
        [HttpGet("{id}")]
        public ActionResult<EventType> GetEventTypes(int id)
        {
            var eventType = eventTypes.GetById(id);

            if (eventType == null)
            {
                return NotFound();
            }

            return Ok(eventType);
        }

        // PUT: api/BookMyShow/EventTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutEventType(int id, EventType eventType)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            eventTypes.Update(id, eventType);

            return Ok();
        }

        // POST: api/BookMyShow/EventType
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<Seat> PostEventType(EventType eventType)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            eventTypes.Create(eventType);

            return Ok();
        }

        // DELETE: api/BookMyShow/EventType/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteEventType(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            eventTypes.Delete(id);

            return Ok();
        }
    }
}
