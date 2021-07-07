using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpicejetWebApi.Authentication;
using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;

namespace SpicejetWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirplaneDetailsController : ControllerBase
    {
        private readonly IAirplaneRepository repository;
        public AirplaneDetailsController(IAirplaneRepository repository)
        {
            this.repository = repository;
        }

       [Authorize (Roles =SpicejetUserRoles.Admin)]
        [HttpGet]
        public ActionResult GetAllPlane()
        {
            try
            {
                return Ok(repository.GetAllAirplane());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [Authorize(Roles = SpicejetUserRoles.User + "," + SpicejetUserRoles.Admin)]
        [HttpGet("{AirplaneId}")]
        public ActionResult GetPlaneById(int AirplaneId)
        {
            try
            {
                return Ok(repository.GetAirplaneById(AirplaneId));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPost]
        public ActionResult InsertAirplane(AirplaneDetail airplane)
        {
            try
            {
                repository.InsertAirplane(airplane);
                return Ok("Airplane is Inserted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [Authorize(Roles = SpicejetUserRoles.User + "," + SpicejetUserRoles.Admin)]
        [HttpPut("{AirplaneId}")]
        public ActionResult UpdateAirplane(int AirplaneId,AirplaneDetail airplane)
        {
            try
            {
                repository.UpdateAirplane(AirplaneId, airplane);
                return Ok("Airplane Updated Successfullay");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpDelete("{AirplaneId}")]
        public ActionResult DeleteAirplane(int AirplaneId)
        {
            try
            {
                repository.DeleteAirplane(AirplaneId);
                return Ok("Airplane Deleted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }



    }
}
