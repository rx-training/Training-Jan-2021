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
    public class MovieBookingsController : ControllerBase
    {
        private readonly IMovieBooking movieBookings;

        public MovieBookingsController(IMovieBooking context)
        {
            movieBookings = context;
        }

        // GET: api/BookMyShow/MovieBookings
        //[Authorize(Roles = UserRoles.Admin)]
        [HttpGet]
        public ActionResult<IEnumerable<MovieBooking>> GetMovieBookings()
        {
            return Ok(movieBookings.GetAllMovieBookings());
        }

        // GET: api/BookMyShow/MovieBookings/9845125623
        [Authorize]
        [HttpGet("{contactno}")]
        public ActionResult<IEnumerable<MovieBooking>> GetMovieBookingsByContact(string contactno)
        {
            var movieBooking = movieBookings.GetMovieBookingByContact(contactno);

            if (movieBooking == null)
            {
                return NotFound();
            }

            return Ok(movieBooking);
        }

        // POST: api/BookMyShow/MovieBookings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.User)]
        public ActionResult PostMovieBooking(MovieBookingDTO movie)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            movieBookings.BookMovie(movie);

            return Ok();
        }

    }
}
