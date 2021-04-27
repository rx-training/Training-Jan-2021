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
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Theatre>> GetTheatres()
        {
            return Ok(theatres.GetAll());
        }

        // GET: api/BookMyShow/Theatres/5
        [Authorize]
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

        // GET: api/BookMyShow/Theatres/5/Screens
        [Authorize]
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
    }
}
