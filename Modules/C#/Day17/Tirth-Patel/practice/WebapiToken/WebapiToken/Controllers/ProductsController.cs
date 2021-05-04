using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebapiToken.Models;

namespace WebapiToken.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly InventoriesContext _context;

        public ProductsController(InventoriesContext context)
        {
            _context = context;
        }

        // GET: api/Products
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Products>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Products>>> GetProducts(bool? inStock, int? skip, int? take)
        {
            var products = _context.Products.AsQueryable();

            if (inStock != null) // Adds the condition to check availability 
            {
                products = _context.Products.Where(i => i.AvailableQuantity > 0);
            }

            if (skip != null)
            {
                products = products.Skip((int)skip);
            }

            if (take != null)
            {
                products = products.Take((int)take);
            }

            return await products.ToListAsync();
        }

        // PUT: api/Products/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProducts(int id, Products products)
        {
            if (id != products.ProductId)
            {
                return BadRequest();
            }

            _context.Entry(products).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductsExists(id))
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

        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Products>> PostProducts(Products products)
        {
            _context.Products.Add(products);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProducts", new { id = products.ProductId }, products);
        }

        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProducts(int id)
        {
            var products = await _context.Products.FindAsync(id);
            if (products == null)
            {
                return NotFound();
            }

            _context.Products.Remove(products);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductsExists(int id)
        {
            return _context.Products.Any(e => e.ProductId == id);
        }
    }
}
