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
    [Route("Traveller/[controller]")]
    [ApiController]
    public class TravellerController : ControllerBase
    {
        private readonly ITravellerRepository repository;
        public TravellerController(ITravellerRepository repository)
        {
            this.repository = repository;
        }

        // Get All Traveller 
        [Authorize(Roles = UserRoles.Admin)]
        [HttpGet]
        public ActionResult GetAllTRaveller()
        {
            try
            {
                return Ok(repository.GetAll());
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }

        }

        [Authorize(Roles = UserRoles.User)]
        // GET api/<TravellerController>/5
        [HttpGet("{PNRNumber}")]
        public ActionResult GetTravellerById(string PNRNumber)
        {
            try
            {
                return Ok(repository.GetByPnrNumber(PNRNumber));
            }
            catch (Exception)
            {
                return BadRequest("Error Is Occured");
            }
        }

        [Authorize(Roles = UserRoles.User)]
        //Inserting Traveller
        [HttpPost]
        public ActionResult PostTraveller(Travelller travelller)
        {
            try
            {
                repository.Insert(travelller);
                return Ok("Data is successfully Inserted");
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        [Authorize(Roles = UserRoles.User)]
        // Update The Record
        [HttpPut]
        public ActionResult PutTraveller(Travelller travelller)
        {
            try
            {
                repository.Update(travelller);
                return Ok("Data is updeted successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        [Authorize(Roles = UserRoles.User)]
        // Delete The Traveller
        [HttpDelete]
        public ActionResult Delete(Travelller travelller)
        {
            try
            {
                repository.Delete(travelller);
                return Ok("Data is successfully Deleted");
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }
    }
}
