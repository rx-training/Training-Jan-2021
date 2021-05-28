using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Assignment1.Models;

namespace Assignment1.Controllers
{
    [Route("api/emps/{empID}/child/[Controller]")]
    [ApiController]
    public class Assignments1Controller : ControllerBase
    {
        private readonly EmployeeDBContext _context;

        public Assignments1Controller(EmployeeDBContext context)
        {
            _context = context;
        }


        // GET: api/Assignments1
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Assignments>>> GetAssignments()
        {
            return await _context.Assignments.ToListAsync();
        }

        // GET: api/Assignments1/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Assignments>> GetAssignments(int id)
        {
            var assignments = await _context.Assignments.FindAsync(id);

            if (assignments == null)
            {
                return NotFound();
            }

            return assignments;
        }

        // PUT: api/Assignments1/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAssignments(int id, Assignments assignments)
        {
            if (id != assignments.AssignmentID)
            {
                return BadRequest();
            }

            _context.Entry(assignments).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssignmentsExists(id))
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

        // POST: api/Assignments1
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Assignments>> PostAssignments(Assignments assignments)
        {
            _context.Assignments.Add(assignments);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAssignments", new { id = assignments.AssignmentID }, assignments);
        }

        // DELETE: api/Assignments1/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAssignments(int id)
        {
            var assignments = await _context.Assignments.FindAsync(id);
            if (assignments == null)
            {
                return NotFound();
            }

            _context.Assignments.Remove(assignments);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AssignmentsExists(int id)
        {
            return _context.Assignments.Any(e => e.AssignmentID == id);
        }
    }
}
