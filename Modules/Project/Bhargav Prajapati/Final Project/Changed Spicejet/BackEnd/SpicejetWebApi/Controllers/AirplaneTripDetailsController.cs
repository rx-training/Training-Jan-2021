using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpicejetWebApi.Authentication;
using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirplaneTripDetailsController : ControllerBase
    {
        private readonly ITripDetailsRepository repository;
        public AirplaneTripDetailsController(ITripDetailsRepository repository)
        {
            this.repository = repository;
        }

        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet]
        public ActionResult GetAllTrip()
        {
            try
            {
              return Ok(repository.GetAllTrip());
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet("{TripId}")]
        public ActionResult GetTripById(int TripId)
        {
            try
            {
                return Ok(repository.GetTripById(TripId));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPost]
        public ActionResult InsertTrip(TripDetail trip)
        {
            try
            {
                repository.InsertTrip(trip);
                return Ok("Trip is Inserted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPut("{TripId}")]
        public ActionResult UpdateTrip(int TripId, TripDetail trip)
        {
            try
            {
                repository.UpdateTrip(TripId, trip);
                return Ok("Trip is Updated Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpDelete("{TripId}")]
        public ActionResult DeleteTrip(int tripid)
        {
            try
            {
                repository.DeleteTrip(tripid);
                return Ok("Trip is Deleted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


    }
}
