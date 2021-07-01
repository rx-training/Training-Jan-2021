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
    public class AirplaneCrudController : ControllerBase
    {
        private readonly IAirPlaneCrudRepository repository;
        public AirplaneCrudController(IAirPlaneCrudRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public ActionResult GetAllAirplane()
        {
            try
            {
                return Ok(repository.GetAllAirPlane());
            }
            catch (Exception e)
            {
                return BadRequest(e); 
            }
        }
        [HttpPost]
        public ActionResult InsertAirplane(AirplaneDetail airplane)
        {
            try
            {
                repository.InsertAirPlane(airplane);
                return Ok("Data is Inserted Succcessfully");
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpPut("{AirplaneId}")]
        public ActionResult UpdateAirplane(int AirplaneId, AirplaneDetail airplane)
        {
            try
            {
                repository.UpdateAirPlane(AirplaneId,airplane);
                return Ok("Data is Updated Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpDelete("{AirplaneId}")]
        public ActionResult DeleteAirplane(int AirplaneId)
        {
            try
            {
                repository.DeleteAirplane(AirplaneId);
                return Ok("Data is Deleted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
