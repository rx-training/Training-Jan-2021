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
    public class MoviesController : ControllerBase
    {
        private readonly IMovie movies;

        public MoviesController(IMovie context)
        {
            movies = context;
        }

        // GET: api/BookMyShow/Movies
        [HttpGet]
        public ActionResult<IEnumerable<Movie>> GetMovies()
        {
            return Ok(movies.GetAllMovies());
        }

        [HttpGet("Languages/{language}")]
        public ActionResult<IEnumerable<Movie>> GetMovieByLanguage(string language)
        {
            return Ok(movies.GetMoviesByLangugage(language));
        }

        [HttpGet("Genres/{genre}")]
        public ActionResult<IEnumerable<Movie>> GetMovieByGenre(string genre)
        {
            return Ok(movies.GetMoviesByGenre(genre));
        }

        [HttpGet("FilmCategory/{filmCategory}")]
        public ActionResult<IEnumerable<Movie>> GetMovieByFilmCategory(string filmCategory)
        {
            return Ok(movies.GetMoviesByFilmCategory(filmCategory));
        }

        [HttpGet("Genres/{genre}/Languages/{language}")]
        public ActionResult<IEnumerable<Movie>> GetMovieByGenreLanguage(string genre, string language)
        {
            return Ok(movies.GetMoviesByGenreLanguage(genre, language));
        }

        // GET: api/BookMyShow/Movies/5
        [HttpGet("{id}")]
        public ActionResult<Movie> GetMovie(int id)
        {
            var movie = movies.GetMovieById(id);

            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }

        // GET: api/BookMyShow/Movies/5/Languages
        [HttpGet("{id}/Languages")]
        public ActionResult<VMovie> GetLanguages(int id)
        {
            var languages = movies.GetLanguagesByMovie(id);

            if (languages == null)
            {
                return NotFound();
            }

            return Ok(languages);
        }

        // GET: api/BookMyShow/Movies/5/Languages/English/FilmCategories
        [HttpGet("{id}/Languages/{language}/FilmCategories")]
        public ActionResult<VMovie> GetFilmcategories(int id, string language)
        {
            var filmCategories = movies.GetFilmCategoriesByLanguage(id, language);

            if (filmCategories == null)
            {
                return NotFound();
            }

            return Ok(filmCategories);
        }

        // GET: api/BookMyShow/Movies/5/Languages/English/FilmCategories/2D/Theatres
        [HttpGet("{id}/Languages/{language}/FilmCategories/{filmCategory}/Theatres")]
        public ActionResult<TheatresMovie> GetTheatres(int id, string language, string filmCategory)
        {
            var theatres = movies.GetTheatresByFilmCategory(id, language, filmCategory);

            if (theatres == null)
            {
                return NotFound();
            }

            return Ok(theatres);
        }

        [HttpGet("{id}/Languages/{language}/FilmCategories/{filmCategory}/Theatres/{theatreId}/ShowTimings")]
        public ActionResult<TheatresMovie> GetShowTimings(int id, string language, string filmCategory, int theatreId)
        {
            var showTimings = movies.GetShowTimingsByTheatre(id, language, filmCategory, theatreId);

            if (showTimings == null)
            {
                return NotFound();
            }

            return Ok(showTimings);
        }

        // GET: api/BookMyShow/Movies/5/Languages/English/FilmCategories/2D/Theatres/4/ShowTimings/03:00 PM/SeatCategories
        [HttpGet("{id}/Languages/{language}/FilmCategories/{filmCategory}/Theatres/{theatreid}/ShowTimings/{showTime}/SeatCategories")]
        public ActionResult<TheatresMovie> GetSeatCategories(int id, string language, string filmCategory, int theatreid, string showTime)
        {
            var seatCategory = movies.GetSeatCategoriesByTheatreShowTimings(id, language, filmCategory, theatreid, showTime);

            if (seatCategory == null)
            {
                return NotFound();
            }

            return Ok(seatCategory);
        }

        // GET: api/BookMyShow/Movies/5/Languages/English/FilmCategories/2D/Theatres/4/ShowTimings/03:00 PM/SeatsCategories/Normal/Seats
        [HttpGet("{id}/Languages/{language}/FilmCategories/{filmCategory}/Theatres/{theatreid}/ShowTimings/{showTime}/SeatsCategories/{seatCategory}/Seats")]
        public ActionResult<TheatresMovie> GetSeats(int id, string language, string filmCategory, int theatreid, string showTime, string seatCategory)
        {
            var seats = movies.GetSeatsBySeatCategories(id, language, filmCategory, theatreid, showTime, seatCategory);

            if (seats == null)
            {
                return NotFound();
            }

            return Ok(seats);
        }

        // PUT: api/BookMyShow/Movies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutMovie(MovieDTO movie)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            movies.Update(movie);

            return Ok();
        }

        // POST: api/BookMyShow/Movies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<MovieDTO> PostMovie(MovieDTO movie)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            movies.CreateMovie(movie);

            return Ok();
        }

        // POST: api/BookMyShow/Movies/1/Languages
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/Languages")]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<MovieLanguage> PostMovieLanguages(int id, [FromBody] string language)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            movies.CreateMovieLanguages(id, language);

            return Ok();
        }

        // POST: api/BookMyShow/Movies/1/Genres
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/Genres")]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<MovieGenre> PostMovieGenres(int id, [FromBody] string genre)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            movies.CreateMovieGenres(id, genre);

            return Ok();
        }

        // POST: api/BookMyShow/Movies/1/FilmCategories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/FilmCategories")]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<MovieFilmCategory> PostMovieFilmCategories(int id, [FromBody] string filmCategory)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            movies.CreateMovieFilmCategories(id, filmCategory);

            return Ok();
        }

        // DELETE: api/BookMyShow/Movie/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteMovie(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            movies.Delete(id);

            return Ok();
        }

        // DELETE: api/BookMyShow/Movie/5/Languages/English
        [HttpDelete("{id}/Languages/{language}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteMovieLanguage(int id, string language)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            movies.DeleteMovieLanguages(id, language);

            return Ok();
        }

        // DELETE: api/BookMyShow/Movie/5/Genres/Family
        [HttpDelete("{id}/Genres/{genre}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteMovieGenre(int id, string genre)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            movies.DeleteMovieGenres(id, genre);

            return Ok();
        }

        // DELETE: api/BookMyShow/Movie/5/FilmCategory/2D
        [HttpDelete("{id}/FilmCategories/{filmCategory}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteMovieFilmCategories(int id, string filmCategory)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            movies.DeleteMovieFilmCategories(id, filmCategory);

            return Ok();
        }
    }
}
