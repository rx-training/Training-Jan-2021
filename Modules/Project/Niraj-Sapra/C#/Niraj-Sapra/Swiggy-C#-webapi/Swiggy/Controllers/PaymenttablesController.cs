using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Swiggy.Models;

namespace Swiggy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymenttablesController : ControllerBase
    {
        private readonly Swiggy_ProjectContext _context;

        public PaymenttablesController(Swiggy_ProjectContext context)
        {
            _context = context;
        }

        // GET: api/Paymenttables
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Paymenttable>>> GetPaymenttables()
        {
            return await _context.Paymenttables.ToListAsync();
        }

        // GET: api/Paymenttables/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Paymenttable>> GetPaymenttable(int id)
        {
            var paymenttable = await _context.Paymenttables.FindAsync(id);

            if (paymenttable == null)
            {
                return NotFound();
            }

            return paymenttable;
        }

        // PUT: api/Paymenttables/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPaymenttable(int id, Paymenttable paymenttable)
        {
            if (id != paymenttable.Payid)
            {
                return BadRequest();
            }

            _context.Entry(paymenttable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymenttableExists(id))
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

        // POST: api/Paymenttables
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Paymenttable>> PostPaymenttable(Paymenttable paymenttable)
        {
            _context.Paymenttables.Add(paymenttable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPaymenttable", new { id = paymenttable.Payid }, paymenttable);
        }

        // DELETE: api/Paymenttables/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePaymenttable(int id)
        {
            var paymenttable = await _context.Paymenttables.FindAsync(id);
            if (paymenttable == null)
            {
                return NotFound();
            }

            _context.Paymenttables.Remove(paymenttable);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PaymenttableExists(int id)
        {
            return _context.Paymenttables.Any(e => e.Payid == id);
        }
    }
}
