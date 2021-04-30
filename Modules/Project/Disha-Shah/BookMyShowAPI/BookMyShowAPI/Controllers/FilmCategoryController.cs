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
    public class FilmCategoryController : ControllerBase
    {
        private readonly IFilmCategory filmCategories;

        public FilmCategoryController(IFilmCategory context)
        {
            filmCategories = context;
        }

        // GET: api/BookMyShow/FilmCategory
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<FilmCategory>> GetFilmCategories()
        {
            return Ok(filmCategories.GetAll());
        }

        // GET: api/BookMyShow/FilmCategory/5
        [Authorize]
        [HttpGet("{id}")]
        public ActionResult<FilmCategory> GetFilmCategory(int id)
        {
            var filmCategory = filmCategories.GetById(id);

            if (filmCategory == null)
            {
                return NotFound();
            }

            return Ok(filmCategory);
        }

        // PUT: api/BookMyShow/FilmCategory/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutFilmCategory(int id, FilmCategory filmCategory)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            filmCategories.Update(id, filmCategory);

            return Ok();
        }

        // POST: api/BookMyShow/FilmCategory
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<FilmCategory> PostFilmCategory(FilmCategory filmCategory)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            filmCategories.Create(filmCategory);

            return Ok();
        }

        // DELETE: api/BookMyShow/FilmCategory/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteFilmCategory(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            filmCategories.Delete(id);

            return Ok();
        }
    }
}
