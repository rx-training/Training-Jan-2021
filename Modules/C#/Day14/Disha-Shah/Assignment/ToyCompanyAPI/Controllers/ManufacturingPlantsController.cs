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
    public class ManufacturingPlantsController : ControllerBase
    {
        private readonly IManufacturingPlant manufacturingPlants;

        public ManufacturingPlantsController(IManufacturingPlant context)
        {
            manufacturingPlants = context;
        }

        // GET: api/Customers
        [HttpGet]
        public ActionResult<List<ManufacturingPlant>> GetManufacturingPlants()
        {
            //return await customer.Customers.ToListAsync();
            return Ok(manufacturingPlants.GetAll());
        }

        // GET: api/Customers/Reena&Mehta
        [HttpGet("{id}")]
        public ActionResult<ManufacturingPlant> GetManufacturingPlant(int id)
        {
            var manufacturingPlantInfo = manufacturingPlants.GetById(id);

            if (manufacturingPlantInfo == null)
            {
                return NotFound();
            }

            return Ok(manufacturingPlantInfo);
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public ActionResult Put(int id, ManufacturingPlant manufacturingPlantInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            manufacturingPlants.Update(id, manufacturingPlantInfo);

            return Ok();
        }

        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult Post(ManufacturingPlant manufacturingPlantInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            manufacturingPlants.Create(manufacturingPlantInfo);

            //return CreatedAtAction("GetCustomer", new { id = customerInfo.Id }, customer);
            return Ok();
        }

        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/toys/{toy}")]
        public ActionResult PostManufacturingPlantToy(int id, string toy)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            manufacturingPlants.CreateToy(id, toy);

            //return CreatedAtAction("GetCustomer", new { id = customerInfo.Id }, customer);
            return Ok();
        }


        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public ActionResult DeleteCustomer(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            manufacturingPlants.Delete(id);

            return Ok();
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}/toys/{toy}")]
        public ActionResult DeleteToy(int id, string toy)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            manufacturingPlants.DeleteToy(id, toy);

            return Ok();
        }

    }
}
