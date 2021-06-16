using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Code.Interfaces;
using UberAPI.Models;
using UberAPI.Models.Auth;

namespace UberAPI.Controllers.Drivers
{
    [Authorize(Roles = UserRoles.DriverRole)]
    [Route("api/driver/{id}/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly IDriverRepo driverRepo;

        public ProfileController(IDriverRepo driverRepo)
        {
            this.driverRepo = driverRepo;
        }

        [HttpGet]
        public ActionResult<VDriver> GetProfile(int id)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!driverRepo.ValidateDriver(cred, id))
            {
                return Unauthorized();
            }
            var driver = driverRepo.Find(x => x.DriverId == id).Single();
            if (driver.IsBlocked == true)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
            }

            // fetching profile
            var profile = driverRepo.ViewProfile(id);
            if (profile == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Driver not found" });
            }
            return profile;
        }
    }
}
