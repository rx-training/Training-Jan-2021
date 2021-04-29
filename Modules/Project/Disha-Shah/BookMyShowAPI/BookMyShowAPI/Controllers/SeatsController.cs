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
    public class SeatsController : ControllerBase
    {
        private readonly ISeat seats;

        public SeatsController(ISeat context)
        {
            seats = context;
        }

        // GET: api/BookMyShow/Seats
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Seat>> GetSeatCategories()
        {
            return Ok(seats.GetAll());
        }

        // GET: api/BookMyShow/Seats/5
        [Authorize]
        [HttpGet("{id}")]
        public ActionResult<Seat> GetSeatcategory(int id)
        {
            var seat = seats.GetById(id);

            if (seat == null)
            {
                return NotFound();
            }

            return Ok(seat);
        }

        // PUT: api/BookMyShow/Seats/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutSeat(int id, Seat seat)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            seats.Update(id, seat);

            return Ok();
        }

        // POST: api/BookMyShow/Seat
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<Seat> PostSeat(Seat seat)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            seats.Create(seat);

            return Ok();
        }

        // DELETE: api/BookMyShow/Seat/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteSeat(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            seats.Delete(id);

            return Ok();
        }
    }
}
