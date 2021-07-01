using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Inox.Models;
using Inox.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using Inox.Authentication;

namespace Inox.Controllers
{
   
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CinemasController : ControllerBase
    {
        ICinema _cinema;

        public CinemasController(ICinema cinema)
        {
            this._cinema = cinema;
        }
        

        [HttpGet]
        public IEnumerable<Cinema> GetCinemas()
        {
            return  _cinema.GetAll();
        }
        [Authorize(Roles = UserRoles.CinemaAdmin)]
        [HttpGet("{id}")]
        public ActionResult<Cinema> GetCinema(int id)
        {
            var cinema = _cinema.GetById(id);

            if (cinema == null)
            {
                return NotFound();
            }

            return cinema;
        }

        [HttpPut("{id}")]
        public ActionResult<Cinema> PutCinema(int id,Cinema cinema)
        {
        
            try
            {
                _cinema.Update(cinema);
            }
            catch (Exception e)
            {
               Console.WriteLine(e);
            }
            return GetCinema(id);
  
        }

        [HttpPost]
        public ActionResult<Cinema> PostCinema(Cinema cinema)
        {
           
            try
            {
                _cinema.Create(cinema);
            }
            catch (DbUpdateException)
            {
                if (_cinema.Any(e => e.CinemaId == cinema.CinemaId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCinema", new { id = cinema.CinemaId }, cinema);
        }
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public IActionResult DeleteCinema(int id)
        {
            var cinema = _cinema.GetById(id);
            if (cinema == null)
            {
                return NotFound();
            }

            _cinema.Delete(cinema);

            return NoContent();
        }

       
    }
}
