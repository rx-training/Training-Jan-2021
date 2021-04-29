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
    public class SeatCategoryController : ControllerBase
    {
        private readonly ISeatCategory seatCategories;

        public SeatCategoryController(ISeatCategory context)
        {
            seatCategories = context;
        }

        // GET: api/BookMyShow/SeatCategory
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<SeatsCategory>> GetSeatCategories()
        {
            return Ok(seatCategories.GetAll());
        }

        // GET: api/BookMyShow/SeatCategory/5
        [Authorize]
        [HttpGet("{id}")]
        public ActionResult<SeatsCategory> GetSeatcategory(int id)
        {
            var seatCategory = seatCategories.GetById(id);

            if (seatCategory == null)
            {
                return NotFound();
            }

            return Ok(seatCategory);
        }

        // GET: api/BookMyShow/SeatCategory/5/Seats
        [Authorize]
        [HttpGet("{id}/Seats")]
        public ActionResult<IEnumerable<Seat>> GetSeats(int id)
        {
            var seats = seatCategories.GetSeatsBySeatCategoryId(id);

            if (seats == null)
            {
                return NotFound();
            }

            return Ok(seats);
        }

        // PUT: api/BookMyShow/SeatCategory/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutSeatCategory(int id, SeatsCategory seatCategory)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            seatCategories.Update(id, seatCategory);

            return Ok();
        }

        // POST: api/BookMyShow/SeatCategory
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<SeatsCategory> PostSeatCategory(SeatsCategory seatCategory)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            seatCategories.Create(seatCategory);

            return Ok();
        }

        // DELETE: api/BookMyShow/SeatCategory/5
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteSeatCategory(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            seatCategories.Delete(id);

            return Ok();
        }
    }
}
