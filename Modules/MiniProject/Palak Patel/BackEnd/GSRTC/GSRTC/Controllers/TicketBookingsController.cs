using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GSRTC.Models;

namespace GSRTC.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketBookingsController : ControllerBase
    {
        private readonly GSRTCContext _context;

        public TicketBookingsController(GSRTCContext context)
        {
            _context = context;
        }

        // GET: api/TicketBookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TicketBooking>>> GetBookings()
        {
            return await _context.Bookings.ToListAsync();
        }

        // GET: api/TicketBookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TicketBooking>> GetTicketBooking(int id)
        {
            var ticketBooking = await _context.Bookings.FindAsync(id);

            if (ticketBooking == null)
            {
                return NotFound();
            }

            return ticketBooking;
        }

        // PUT: api/TicketBookings/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTicketBooking(int id, TicketBooking ticketBooking)
        {
            if (id != ticketBooking.TicketID)
            {
                return BadRequest();
            }

            _context.Entry(ticketBooking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TicketBookingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TicketBookings
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TicketBooking>> PostTicketBooking(TicketBooking ticketBooking)
        {
            _context.Bookings.Add(ticketBooking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTicketBooking", new { id = ticketBooking.TicketID }, ticketBooking);
        }

        // DELETE: api/TicketBookings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TicketBooking>> DeleteTicketBooking(int id)
        {
            var ticketBooking = await _context.Bookings.FindAsync(id);
            if (ticketBooking == null)
            {
                return NotFound();
            }

            _context.Bookings.Remove(ticketBooking);
            await _context.SaveChangesAsync();

            return ticketBooking;
        }

        private bool TicketBookingExists(int id)
        {
            return _context.Bookings.Any(e => e.TicketID == id);
        }
    }
}
