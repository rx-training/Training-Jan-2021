using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Demo;

namespace Demo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpsController : ControllerBase
    {
        private readonly EmpContext _context;

        public EmpsController(EmpContext context)
        {
            _context = context;
        }

        // GET: api/Emps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Emps>>> GetEmps()
        {
            return await _context.Emps.ToListAsync();
        }

        // GET: api/Emps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Emps>> GetEmps(int id)
        {
            var emps = await _context.Emps.FindAsync(id);

            if (emps == null)
            {
                return NotFound();
            }

            return emps;
        }

        // PUT: api/Emps/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmps(int id, Emps emps)
        {
            if (id != emps.EmpId)
            {
                return BadRequest();
            }

            _context.Entry(emps).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpsExists(id))
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

        // POST: api/Emps
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Emps>> PostEmps(Emps emps)
        {
            _context.Emps.Add(emps);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmps", new { id = emps.EmpId }, emps);
        }

        // DELETE: api/Emps/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Emps>> DeleteEmps(int id)
        {
            var emps = await _context.Emps.FindAsync(id);
            if (emps == null)
            {
                return NotFound();
            }

            _context.Emps.Remove(emps);
            await _context.SaveChangesAsync();

            return emps;
        }

        private bool EmpsExists(int id)
        {
            return _context.Emps.Any(e => e.EmpId == id);
        }
    }
}
