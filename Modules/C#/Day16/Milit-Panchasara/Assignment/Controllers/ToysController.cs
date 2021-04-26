using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Assignment.Models;

namespace Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToysController : ControllerBase
    {
        private readonly ToyCompanyContext _context;

        public ToysController(ToyCompanyContext context)
        {
            _context = context;
        }

        // GET: api/Toys
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Toy>>> GetToys()
        {
            return await _context.Toys.ToListAsync();
        }

        // GET: api/Toys/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Toy>> GetToy(int id)
        {
            var toy = await _context.Toys.FindAsync(id);

            if (toy == null)
            {
                return NotFound();
            }

            return toy;
        }

        // PUT: api/Toys/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<Toy>> PutToy(int id, Toy toy)
        {
            var t = _context.Toys.Find(id);
            if (t == null)
            {
                return BadRequest();
            }
            t.Name = toy.Name;
            t.Price = toy.Price;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return t;
        }

        // POST: api/Toys
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Toy>> PostToy(Toy toy)
        {
            _context.Toys.Add(toy);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetToy", new { id = toy.Id }, toy);
        }

        // DELETE: api/Toys/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteToy(int id)
        {
            var toy = await _context.Toys.FindAsync(id);
            if (toy == null)
            {
                return NotFound();
            }

            _context.Toys.Remove(toy);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ToyExists(int id)
        {
            return _context.Toys.Any(e => e.Id == id);
        }
    }
}
