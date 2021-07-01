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
    public class MovieDirectorCastController : ControllerBase
    {
        IMovieDirectorCast _movieDirectorCast;

        public MovieDirectorCastController(IMovieDirectorCast movieDirectorCast)
        {
            this._movieDirectorCast = movieDirectorCast;
        }

        [HttpGet]
        public IEnumerable<MovieDirectorCast> GetMovieDirectorCasts()
        {
            return _movieDirectorCast.GetAll();
        }

        [HttpGet("{id}")]
        public ActionResult<MovieDirectorCast> GetMovieDirectorCasts(int id)
        {
            var movieDirectorCast = _movieDirectorCast.GetById(id);

            if (movieDirectorCast == null)
            {
                return NotFound();
            }

            return movieDirectorCast;
        }

        [HttpPut("{id}")]
        public ActionResult<MovieDirectorCast> PutMovieDirectorCasts(int id, MovieDirectorCast movieDirectorCast)
        {

            try
            {
                _movieDirectorCast.Update(movieDirectorCast);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetMovieDirectorCasts(id);

        }

        [HttpPost]
        public ActionResult<MovieDirectorCast> PostMovieDirectorCasts(MovieDirectorCast movieDirectorCast)
        {

            try
            {
                _movieDirectorCast.Create(movieDirectorCast);
            }
            catch (DbUpdateException)
            {
                if (_movieDirectorCast.Any(e => e.NameId == movieDirectorCast.NameId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMovieDirectorCast", new { id = movieDirectorCast.MovieId }, movieDirectorCast);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteDirectorCast(int id)
        {
            var movieDirectorCast = _movieDirectorCast.GetById(id);
            if (movieDirectorCast == null)
            {
                return NotFound();
            }

            _movieDirectorCast.Delete(movieDirectorCast);

            return NoContent();
        }


    }
}
