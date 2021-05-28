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
    public class GenresController : ControllerBase
    {
        private readonly IGenre genres;

        public GenresController(IGenre context)
        {
            genres = context;
        }

        // GET: api/BookMyShow/Genres
        [HttpGet]
        public ActionResult<IEnumerable<Genre>> GetGenres()
        {
            return Ok(genres.GetAll());
        }

        // GET: api/BookMyShow/Genres/5
        [HttpGet("{id}")]
        public ActionResult<Genre> GetGenre(int id)
        {
            var genre = genres.GetById(id);

            if (genre == null)
            {
                return NotFound();
            }

            return Ok(genre);
        }

        // PUT: api/BookMyShow/Genres/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutGenre(int id, Genre genre)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            genres.Update(id, genre);

            return Ok();
        }

        // POST: api/BookMyShow/Genres
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<Genre> PostGenre(Genre genre)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            genres.Create(genre);

            return Ok();
        }

        // DELETE: api/BookMyShow/Genres/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteGenre(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            genres.Delete(id);

            return Ok();
        }
    }
}
