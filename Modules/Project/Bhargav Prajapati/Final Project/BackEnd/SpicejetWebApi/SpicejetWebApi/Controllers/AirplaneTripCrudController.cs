using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class AirplaneTripCrudController : ControllerBase
    {
        private readonly ITripDetailsCrudRepository repository;
        public AirplaneTripCrudController(ITripDetailsCrudRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public ActionResult GetAllTrip()
        {
            try
            {
                return Ok(repository.GetAllTrip());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpPost]
        public ActionResult InsertAirplane(TravelTrip travel)
        {
            try
            {
                repository.InsertData(travel);
                return Ok("Data is Inserted Succcessfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpPut("{TripId}")]
        public ActionResult UpdateAirplane(int TripId, TravelTrip travel)
        {
            try
            {
                repository.UpdateTrip(TripId,travel);
                return Ok("Data is Updated Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpDelete("{TripId}")]
        public ActionResult DeleteAirplane(int TripId)
        {
            try
            {
                repository.DeleteTrip(TripId);
                return Ok("Data is Deleted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
