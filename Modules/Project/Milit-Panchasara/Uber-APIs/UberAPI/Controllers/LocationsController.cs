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
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
        private readonly ILocationRepo locationRepo;

        public LocationsController(ILocationRepo locationRepo)
        {
            this.locationRepo = locationRepo;
        }

        // GET: api/Locations
        [HttpGet]
        public ActionResult<IEnumerable<Location>> GetLocations()
        {
            return locationRepo.Index().ToList();
        }

        // POST: api/Locations
        [Authorize(Roles = UserRoles.AdminRole)]
        [HttpPost]
        public ActionResult<Location> PostLocation(Location location)
        {
            var newLocation = locationRepo.Add(location);

            return newLocation;
        }
    }
}
