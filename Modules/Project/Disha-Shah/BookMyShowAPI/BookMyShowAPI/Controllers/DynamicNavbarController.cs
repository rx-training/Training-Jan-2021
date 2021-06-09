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
    public class DynamicNavbarController : ControllerBase
    {
        private readonly IDynamicNavbar dynamicNavbars;

        public DynamicNavbarController(IDynamicNavbar context)
        {
            dynamicNavbars = context;
        }

        // GET: api/BookMyShow/Certifications
        [HttpGet]
        public ActionResult<IEnumerable<DynamicNavbar>> GetDynamicNavbars()
        {
            return Ok(dynamicNavbars.GetAll());
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpGet("{id}")]
        public ActionResult<DynamicNavbar> GetDynamicNavbar(int id)
        {
            var navbar = dynamicNavbars.GetById(id);

            if (navbar == null)
            {
                return NotFound();
            }

            return Ok(navbar);
        }

        [HttpPut("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult PutDynamicNavbar(int id, DynamicNavbar dynamicNavbar)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            dynamicNavbars.Update(id, dynamicNavbar);

            return Ok();
        }

        // POST: api/BookMyShow/Cities
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize(Roles = UserRoles.Admin)]
        public ActionResult<DynamicNavbar> PostDynamicNavbar(DynamicNavbar dynamicNavbar)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            dynamicNavbars.Create(dynamicNavbar);

            return Ok();
        }

        // DELETE: api/BookMyShow/Cities
        [HttpDelete("{id}")]
        [Authorize(Roles = UserRoles.Admin)]
        public IActionResult DeleteDynamicNavbar(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            dynamicNavbars.Delete(id);

            return Ok();
        }
    }
}
