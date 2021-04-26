using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ToyCompanyAPI.IRepository;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToyCategoriesController : Controller
    {
        private readonly IToyCategory toyCategories;

        public ToyCategoriesController(IToyCategory context)
        {
            toyCategories = context;
        }

        // GET: api/Customers
        [HttpGet]
        public ActionResult<List<ToyCategory>> GetToyCategories()
        {
            return Ok(toyCategories.GetAll());
        }

        // GET: api/Customers/Reena&Mehta
        [HttpGet("{id}")]
        public ActionResult<ToyCategory> GetToyCategory(int id)
        {
            var toyCategoryInfo = toyCategories.GetById(id);

            if (toyCategoryInfo == null)
            {
                return NotFound();
            }

            return Ok(toyCategoryInfo);
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public ActionResult Put(int id, ToyCategory toyCategoryInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            toyCategories.Update(id, toyCategoryInfo);

            return Ok();
        }


        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult Post(ToyCategory toyCategoryInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            toyCategories.Create(toyCategoryInfo);

            return Ok();
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public ActionResult DeleteCustomer(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            toyCategories.Delete(id);

            return Ok();
        }
    }
}
