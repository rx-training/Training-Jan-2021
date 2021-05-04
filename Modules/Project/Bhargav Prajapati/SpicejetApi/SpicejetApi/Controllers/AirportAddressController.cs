using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpicejetApi.Authentication;
using SpicejetApi.Models;
using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SpicejetApi.Controllers
{
    [Authorize(Roles = UserRoles.Admin)]
    [Route("AirportAddress/[controller]")]
    [ApiController]
    public class AirportAddressController : ControllerBase
    {
        private readonly IAirportAddressRepository repository;
        public AirportAddressController(IAirportAddressRepository repo)
        {
            repository = repo;
        }

        // GET All Address
        [HttpGet]
        public ActionResult GetAllAddress()
        {
            try
            {
                return Ok(repository.GetAll());
            }
            catch (Exception )
            {
                return BadRequest("Error is occurd");
            }
        }

        // Get Addrss by id
        [HttpGet("{id}")]
        public ActionResult GetAddressById(int id)
        {
            try
            {
                return Ok(repository.GetById(id));
            }
            catch (Exception )
            {
                return BadRequest("Error is occurd");
            }
        }

        // Insert the record
        [HttpPost]
        public ActionResult PostAddress(Addressofairport addressofairport)
        {
            try {
                
                repository.Insert(addressofairport);
                return Ok("Data is Inserted");
            }
            catch (Exception )
            {
                return BadRequest("Error is occurd");
            }
        }

        // Update Address
        [HttpPut]
        public ActionResult UpdateAddress(Addressofairport addressofairport)
        {
            try
            { 
                repository.Update(addressofairport);
                return Ok("Data is updated successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is occurd");
            }
        }

        // DELETE api/<AirportAddressController>/5
        [HttpDelete]
        public ActionResult DeleteData(Addressofairport addressofairport)
        {
            try
            {
                repository.Delete(addressofairport);
                return Ok("Data is deleted successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is occurd");
            }
        }
    }
}
