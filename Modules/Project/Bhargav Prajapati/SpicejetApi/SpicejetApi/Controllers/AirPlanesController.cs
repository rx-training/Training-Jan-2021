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
    [Authorize(Roles =UserRoles.Admin)]
    [Route("Airplane/[controller]")]
    [ApiController]
    public class AirPlanesController : ControllerBase
    {
        private readonly IAirplaneRepository repository;

        public AirPlanesController(IAirplaneRepository repo)
        {
            repository = repo;
        }

        // get All The plane
        [HttpGet]
        public ActionResult GetAllPlane()
        {
            try
            {
                return Ok(repository.GetAll());
            }
            catch (Exception)
            {
                return BadRequest("Error Is Occured");   
            }
        }

        // GET api/<AirPlanesController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            try
            { 
            return Ok(repository.GetById(id));
            }
            catch(Exception)
            {
                return BadRequest("Error Is Occured");

            }
        }

        // POST api/<AirPlanesController>
        [HttpPost]
        public ActionResult Post(Airplane airplane)
        {
            try
            {
                repository.Update(airplane);
                return Ok("Data is Successfully Updated");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }
        }

        

        // Delete the record
        [HttpDelete("{id}")]
        public ActionResult Delete(Airplane e)
        {
            try
            {
                repository.Delete(e);
                return Ok("Data is deleted success fully");
            }
            catch(Exception)
            {
                return BadRequest("Error Occured");
            }
        }
    }
}
