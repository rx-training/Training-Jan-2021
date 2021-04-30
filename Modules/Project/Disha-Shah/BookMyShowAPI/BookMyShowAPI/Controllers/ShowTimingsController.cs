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
    public class ShowTimingsController : ControllerBase
    {
        private readonly IShowTiming showTimings;

        public ShowTimingsController(IShowTiming context)
        {
            showTimings = context;
        }

        // GET: api/BookMyShow/ShowTimings
        [HttpGet]
        public ActionResult<IEnumerable<ShowTiming>> GetShowTimings()
        {
            return Ok(showTimings.GetAll());
        }

        // GET: api/BookMyShow/ShowTimings/5
        [HttpGet("{id}")]
        public ActionResult<ShowTiming> GetShowTiming(int id)
        {
            var showTiming = showTimings.GetById(id);

            if (showTiming == null)
            {
                return NotFound();
            }

            return Ok(showTiming);
        }


        // POST: api/BookMyShow/ShowTimings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        //[Authorize(Roles = UserRoles.Admin)]
        public ActionResult<ShowTiming> PostShowTiming([FromBody] string showTiming)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            showTimings.CreateShowTime(showTiming);

            return Ok();
        }

        // DELETE: api/BookMyShow/ShowTimings/5
        [HttpDelete("{id}")]
        //[Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteShowTiming(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            showTimings.Delete(id);

            return Ok();
        }

    }
}
