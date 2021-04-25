 using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using person.Models;

namespace person.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Employees1Controller : ControllerBase
    {
        private readonly day5Context _context;

        public Employees1Controller(day5Context context)
        {
            _context = context;
        }

        // GET: api/Employees1
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employees1>>> GetEmployees1s()
        {
            return await _context.Employees1s.ToListAsync();
        }

        // GET: api/Employees1/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employees1>> GetEmployees1(decimal id)
        {
            var employees1 = await _context.Employees1s.FindAsync(id);

            if (employees1 == null)
            {
                return NotFound();
            }

            return employees1;
        }

        // PUT: api/Employees1/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployees1(decimal id, Employees1 employees1)
        {
            if (id != employees1.EmployeeId)
            {
                return BadRequest();
            }

            _context.Entry(employees1).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Employees1Exists(id))
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

        // POST: api/Employees1
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Employees1>> PostEmployees1(Employees1 employees1)
        {
            _context.Employees1s.Add(employees1);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployees1", new { id = employees1.EmployeeId }, employees1);
        }

        // DELETE: api/Employees1/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employees1>> DeleteEmployees1(decimal id)
        {
            var employees1 = await _context.Employees1s.FindAsync(id);
            if (employees1 == null)
            {
                return NotFound();
            }

            _context.Employees1s.Remove(employees1);
            await _context.SaveChangesAsync();

            return employees1;
        }

        private bool Employees1Exists(decimal id)
        {
            return _context.Employees1s.Any(e => e.EmployeeId == id);
        }
    }
}
    