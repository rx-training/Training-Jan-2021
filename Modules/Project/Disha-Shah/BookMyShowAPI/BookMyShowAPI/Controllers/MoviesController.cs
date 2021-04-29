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

        // GET: api/BookMyShow/Movies/5
        [HttpGet("{id}")]
        public ActionResult<Movie> GetMovie(int id)
        {
            var movie = movies.GetById(id);

            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }

        // PUT: api/BookMyShow/Movies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutMovie(int id, Movie movie)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            movies.Update(id, movie);

            return Ok();
        }

        // POST: api/BookMyShow/Movies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<Movie> PostMovie(Movie movie)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            movies.Create(movie);

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
