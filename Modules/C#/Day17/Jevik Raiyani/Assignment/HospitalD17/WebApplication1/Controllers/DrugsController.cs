using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Authentication;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class DrugsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DrugsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Drugs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Drugs>>> GetDrugs()
        {
            return await _context.Drugs.ToListAsync();
        }

        // GET: api/Drugs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Drugs>> GetDrugs(int id)
        {
            var drugs = await _context.Drugs.FindAsync(id);

            if (drugs == null)
            {
                return NotFound();
            }

            return drugs;
        }

        // PUT: api/Drugs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]

        [HttpPut("{id}")]
        public async Task<IActionResult> PutDrugs(int id, Drugs drugs)
        {
            if (id != drugs.Id)
            {
                return BadRequest();
            }

            _context.Entry(drugs).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DrugsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Drugs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public async Task<ActionResult<Drugs>> PostDrugs(Drugs drugs)
        {
            _context.Drugs.Add(drugs);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDrugs", new { id = drugs.Id }, drugs);
        }

        // DELETE: api/Drugs/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDrugs(int id)
        {
            var drugs = await _context.Drugs.FindAsync(id);
            if (drugs == null)
            {
                return NotFound();
            }

            _context.Drugs.Remove(drugs);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DrugsExists(int id)
        {
            return _context.Drugs.Any(e => e.Id == id);
        }
    }
}
