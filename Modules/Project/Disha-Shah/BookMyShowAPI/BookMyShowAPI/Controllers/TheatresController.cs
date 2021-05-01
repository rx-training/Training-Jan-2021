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
    public class TheatresController : ControllerBase
    {
        private readonly ITheatre theatres;

        public TheatresController(ITheatre context)
        {
            theatres = context;
        }

        // GET: api/BookMyShow/Theatres
        [HttpGet]
        public ActionResult<IEnumerable<Theatre>> GetTheatres()
        {
            return Ok(theatres.GetAll());
        }

        // GET: api/BookMyShow/Theatres/5
        [HttpGet("{id}")]
        public ActionResult<Theatre> GetTheatre(int id)
        {
            var theatre = theatres.GetById(id);

            if (theatre == null)
            {
                return NotFound();
            }

            return Ok(theatre);
        }

        // GET: api/BookMyShow/Theatres/5/Movies
        [HttpGet("{id}/Movies")]
        public ActionResult<IEnumerable<TheatresMovie>> GetMovies(int id)
        {
            var movies = theatres.GetMoviesByTheatreId(id);

            if (movies == null)
            {
                return NotFound();
            }

            return Ok(movies);
        }

        // GET: api/BookMyShow/Theatres/5/Movies/31/ShowTimings
        [HttpGet("{id}/Movies/{movieid}/ShowTimings")]
        public ActionResult<IEnumerable<TheatresMovie>> GetShowTimingsByMovie(int movieid)
        {
            var showTimings = theatres.GetShowTimingsByMovieId(movieid);

            if (showTimings == null)
            {
                return NotFound();
            }

            return Ok(showTimings);
        }

        // GET: api/BookMyShow/Theatres/5/Screens
        [HttpGet("{id}/Screens")]
        public ActionResult<IEnumerable<Screen>> GetScreens(int id)
        {
            var screen = theatres.GetScreensById(id);

            if (screen == null)
            {
                return NotFound();
            }

            return Ok(screen);
        }

        // GET: api/BookMyShow/Theatres/5/Screens/1/Movies
        [HttpGet("{id}/Screens/{screenid}/Movies")]
        public ActionResult<IEnumerable<Movie>> GetScreenMovies(int screenid)
        {
            var movie = theatres.GetMovieByScreenId(screenid);

            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }

        // GET: api/BookMyShow/Theatres/5/Screens/1/ShowTimings
        [HttpGet("{id}/Screens/{screenid}/ShowTimings")]
        public ActionResult<IEnumerable<ShowTiming>> GetShowTimings(int screenid)
        {
            var showTime = theatres.GetShowTimingsByScreenId(screenid);

            if (showTime == null)
            {
                return NotFound();
            }

            return Ok(showTime);
        }

        // GET: api/BookMyShow/Theatres/5/Screens/2/SeatCategories
        [HttpGet("{id}/Screens/{screenid}/SeatCategories")]
        public ActionResult<IEnumerable<ScreenSeatsCategory>> GetScreenSeatsCategory(int screenid)
        {
            var screenSeatCategory = theatres.GetSeatCategoryByScreenId(screenid);

            if (screenSeatCategory == null)
            {
                return NotFound();
            }

            return Ok(screenSeatCategory);
        }

        // GET: api/BookMyShow/Theatres/5/Screens/2/SeatCategories/2/Seats
        [HttpGet("{id}/Screens/{screenid}/SeatCategories/{seatCategoryid}/Seats")]
        public ActionResult<IEnumerable<Seat>> GetSeats(int seatCategoryid)
        {
            var seat = theatres.GetSeatsBySeatCategoryId(seatCategoryid);

            if (seat == null)
            {
                return NotFound();
            }

            return Ok(seat);
        }

        // PUT: api/BookMyShow/Theatres/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutTheatre(int id, Theatre theatre)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            theatres.Update(id, theatre);

            return Ok();
        }

        // POST: api/BookMyShow/Theatres
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<Theatre> PostTheatre(Theatre theatre)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            theatres.Create(theatre);

            return Ok();
        }

        // POST: api/BookMyShow/Theatres/5/Screens
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/Screens")]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<Screen> PostScreen(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            theatres.CreateScreenById(id);

            return Ok();
        }

        // POST: api/BookMyShow/Theatres/5/Screens/1/Movies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/Screens/{screenid}/Movies")]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<Movie> PostScreenMovies(int screenid, [FromBody] string movie)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            theatres.CreateMovieByScreenId(screenid, movie);

            return Ok();
        }

        // POST: api/BookMyShow/Theatres/5/Screens/1/ShowTimings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/Screens/{screenid}/ShowTimings")]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<ScreenShowTiming> PostScreenShowTimings(int screenid, [FromBody] string showTiming)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            theatres.CreateShowTimingByScreenId(screenid, showTiming);

            return Ok();
        }

        // POST: api/BookMyShow/Theatres/5/Screens
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/Screens/{screenid}/SeatCategories")]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<ScreenSeatsCategory> PostScreenSeatCategory(int screenid, [FromBody] string seatCategory)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            theatres.CreateSeatCategoryByScreenId(screenid, seatCategory);

            return Ok();
        }

        // DELETE: api/BookMyShow/Theatres/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteTheatre(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            theatres.Delete(id);

            return Ok();
        }

        // DELETE: api/BookMyShow/Theatres/5/Screens/2
        [HttpDelete("{id}/Screens/{screenid}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteScreens(int screenid)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            theatres.DeleteScreenById(screenid);

            return Ok();
        }

        // DELETE: api/BookMyShow/Theatres/5/Screens/2/ShowTiming/10:00 AM
        [HttpDelete("{id}/Screens/{screenid}/ShowTiming/{showTime}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteShowTiming(int screenid, string showTime)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            theatres.DeleteShowTimingByScreenId(screenid, showTime);

            return Ok();
        }

        // DELETE: api/BookMyShow/Theatres/5/Screens/2/Movies/Tenet
        [HttpDelete("{id}/Screens/{screenid}/Movies/{movie}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteScreenMovie(int screenid, string movie)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            theatres.DeleteMovieByScreenId(screenid, movie);

            return Ok();
        }

        // DELETE: api/BookMyShow/Theatres/5/Screens/2
        [HttpDelete("{id}/Screens/{screenid}/SeatCategories/{seatCategory}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteScreenSeatCategory(int screenid, string seatCategory)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            theatres.DeleteSeatCategoryByScreenId(screenid, seatCategory);

            return Ok();
        }
    }
}
