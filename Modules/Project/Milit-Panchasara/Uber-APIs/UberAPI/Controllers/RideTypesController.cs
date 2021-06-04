using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UberAPI.Code.Interfaces;
using UberAPI.Models;
using UberAPI.Models.Auth;

namespace UberAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RideTypesController : ControllerBase
    {
        private readonly IRideTypeRepo rideTypeRepo;

        public RideTypesController(IRideTypeRepo rideTypeRepo)
        {
            this.rideTypeRepo = rideTypeRepo;
        }

        // GET: api/rideTypes
        [HttpGet]
        public ActionResult<IEnumerable<RideType>> GetRideTypes()
        {
            return rideTypeRepo.Index().ToList();
        }

        // POST: api/rideTypes
        [Authorize(Roles = UserRoles.AdminRole)]
        [HttpPost]
        public ActionResult<RideType> PostRideTypes(RideType rideType)
        {
            rideType.CreatedAt = DateTime.Now;
            var newRideType = rideTypeRepo.Add(rideType);

            return newRideType;
        }

        // PUT: api/rideTypes/{id}
        [Authorize(Roles = UserRoles.AdminRole)]
        [HttpPut("{id}")]
        public ActionResult<RideType> PutRideTypes(int id, RideType rideType)
        {
            rideType.RideTypeId = id;
            rideType.ModifiedAt = DateTime.Now;
            var newRideType = rideTypeRepo.Update(rideType);

            return newRideType;
        }

        // Delete: api/rideTypes/{id}
        [Authorize(Roles = UserRoles.AdminRole)]
        [HttpDelete("{id}")]
        public ActionResult<RideType> DeleteRideTypes(int id)
        {
            var rideType = rideTypeRepo.Find(x => x.RideTypeId == id).SingleOrDefault();
            if(rideType == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Ride type not exist!" });
            }
            rideType.RideTypeId = id;
            var newRideType = rideTypeRepo.Delete(rideType);

            return newRideType;
        }
    }
}
