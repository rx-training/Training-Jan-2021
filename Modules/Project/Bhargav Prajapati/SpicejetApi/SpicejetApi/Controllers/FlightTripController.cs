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
    [Route("FLightTrip/[controller]")]
    [ApiController]
    public class FlightTripController : ControllerBase
    {

        private readonly IFlightTripRepository repository;
        public FlightTripController(IFlightTripRepository repository)
        {
            this.repository = repository;
        }

        [Authorize(Roles = UserRoles.User)]
        //Get All FlightTrip
        [HttpGet]
        public ActionResult GetAllFlightTrip()
        {
            try
            {
                return Ok(repository.GetAll());
            }
            catch (Exception)
            {
                return BadRequest("Error is occred");
            }
        }

        // Get Flight trip by Id
        [Authorize(Roles = UserRoles.User)]
        [HttpGet("{id}")]
        public ActionResult GetFlightTripById(int id)
        {
            try
            {
                return Ok(repository.GetById(id));
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        //Inserting Flight Trip
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public ActionResult PostFlightTrip(Flighttrip flighttrip)
        {
            try
            {
                repository.Insert(flighttrip);
                return Ok("Data is successfully Inserted");
            }
            catch(Exception)
            {
                return BadRequest("Error is occured");
            }
        }

        // Update FlightTrip Record
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut]
        public ActionResult Put(Flighttrip flighttrip)
        {
            try
            {
                repository.Update(flighttrip);
                return Ok("Data is successfully updated");
            }
            catch(Exception)
            {
                return BadRequest("Error Is Occured");
            }
        }

        //Delete TripRecord
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete]
        public ActionResult Delete(Flighttrip flighttrip)
        {
            try
            {
                repository.Delete(flighttrip);
                return Ok("Data is Deleted Successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }
    }
}
