using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using UberAPI.Code.Interfaces;
using UberAPI.Models;
using UberAPI.Models.Auth;

namespace UberAPI.Controllers.Riders
{
    [Authorize(Roles = UserRoles.RiderRole)]
    [Route("api/rider/{id}/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly IRiderRepo riderRepo;

        public ProfileController(IRiderRepo riderRepo)
        {
            this.riderRepo = riderRepo;
        }

        [HttpGet]
        public ActionResult<VRider> GetProfile(int id)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!riderRepo.ValidateRider(cred, id))
            {
                return Unauthorized();
            }
            var rider = riderRepo.Find(x => x.RiderId == id).Single();
            if (rider.IsBlocked == true)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
            }

            // fetching profile
            var profile = riderRepo.ViewProfile(id);
            if (profile == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Rider not found" });
            }
            return profile;
        }

        [HttpPut]
        public ActionResult<VRider> UpdateProfile(int id, VRider request)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!riderRepo.ValidateRider(cred, id))
            {
                return Unauthorized();
            }
            var rider = riderRepo.Find(x => x.RiderId == id).Single();
            if (rider.IsBlocked == true)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
            }

            // updating profile
            var profile = riderRepo.EditProfile(id, request);
            if (profile == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Rider not found" });
            }
            return profile;
        }
    }
}
