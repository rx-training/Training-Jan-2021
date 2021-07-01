using Inox.Models;
using Inox.Models.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeatController : ControllerBase
    {
        ISeat _seat;

        public SeatController(ISeat seat)
        {
            this._seat = seat;
        }

        [HttpGet]
        public IEnumerable<Seat> GetSeats()
        {
            return _seat.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<Seat> GetSeats(int id)
        {
            var seat = _seat.GetById(id);

            if (seat == null)
            {
                return NotFound();
            }

            return seat;
        }

        [HttpPut("{id}")]
        public ActionResult<Seat> PutSeats(int id, Seat seat)
        {

            try
            {
                _seat.Update(seat);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetSeats(id);

        }

        [HttpPost]
        public ActionResult<Seat> PostCinema(Seat seat)
        {

            try
            {
                _seat.Create(seat);
            }
            catch (DbUpdateException)
            {
                if (_seat.Any(e => e.SeatId == seat.SeatId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetSeats", new { id = seat.SeatId }, seat);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSeats(int id)
        {
            var seat = _seat.GetById(id);
            if (seat == null)
            {
                return NotFound();
            }

            _seat.Delete(seat);

            return NoContent();
        }


    }
}
