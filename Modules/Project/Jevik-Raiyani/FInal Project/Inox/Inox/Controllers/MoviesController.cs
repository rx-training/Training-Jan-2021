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
    public class MoviesController : ControllerBase
    {
        IMovies _movies;

        public MoviesController(IMovies movies)
        {
            this._movies = movies;
        }


        [HttpGet]
        public IEnumerable<Movie> GetMovies()
        {
            return _movies.GetAll();
        }


        [HttpGet("{id}")]
        public ActionResult<Movie> GetMovies(int id)
        {
            var movie = _movies.GetById(id);

            if (movie == null)
            {
                return NotFound();
            }

            return movie;
        }

        [HttpPut("{id}")]
        public ActionResult<Movie> PutMovie(int id, Movie movie)
        {

            try
            {
                _movies.Update(movie);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetMovies(id);

        }

        [HttpPost]
        public ActionResult<Movie> PostMovie(Movie movie)
        {

            try
            {
                _movies.Create(movie);
            }
            catch (DbUpdateException)
            {
                if (_movies.Any(e => e.MovieId == movie.MovieId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMovies", new { id = movie.MovieId }, movie);
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteMovie(int id)
        {
            var movie = _movies.GetById(id);
            if (movie == null)
            {
                return NotFound();
            }

            _movies.Delete(movie);

            return NoContent();
        }


    }
}