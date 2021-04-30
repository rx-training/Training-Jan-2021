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
    public class EventBookingsController : ControllerBase
    {
        private readonly IEventBooking eventBookings;

        public EventBookingsController(IEventBooking context)
        {
            eventBookings = context;
        }

        // GET: api/BookMyShow/EventBookings
        [Authorize(Roles = UserRoles.Admin)]
        [HttpGet]
        public ActionResult<IEnumerable<EventBooking>> GetEventBookings()
        {
            return Ok(eventBookings.GetAllEventBookings());
        }

        // GET: api/BookMyShow/EventBookings/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpGet("{contactno}")]
        public ActionResult<IEnumerable<EventBooking>> GetEventBookingsByContact(string contactno)
        {
            var eventBooking = eventBookings.GetEventBookingByContact(contactno);

            if (eventBooking == null)
            {
                return NotFound();
            }

            return Ok(eventBooking);
        }

        // POST: api/BookMyShow/EventBookings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult PostEventBooking(EventBookingDTO eventBooking)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            eventBookings.BookEvent(eventBooking);

            return Ok();
        }

    }
}
