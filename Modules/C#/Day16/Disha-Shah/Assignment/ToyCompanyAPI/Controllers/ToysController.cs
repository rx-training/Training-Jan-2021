using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.IRepository;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToysController : ControllerBase
    {
        private readonly IToy toys;

        public ToysController(IToy context)
        {
            toys = context;
        }

        // GET: api/Customers
        [HttpGet]
        public ActionResult<List<Toy>> GetToyCategories()
        {
            //return await customer.Customers.ToListAsync();
            return Ok(toys.GetAll());
        }

        // GET: api/Customers/Reena&Mehta
        [HttpGet("{id}")]
        public ActionResult<Toy> GetToy(int id)
        {
            var toyInfo = toys.GetById(id);

            if (toyInfo == null)
            {
                return NotFound();
            }

            return Ok(toyInfo);
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}/toyCategory/{toyCategoryid}")]
        public ActionResult Put(int id, int toyCategoryid, Toy toyInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            toys.UpdateToy(id, toyCategoryid, toyInfo);

            return Ok();
        }


        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("toyCategory/{id}")]
        public ActionResult Post(int id, Toy toyInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            toys.CreateToy(id,toyInfo);

            return Ok();
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public ActionResult DeleteCustomer(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            toys.Delete(id);

            return Ok();
        }

    }
}
