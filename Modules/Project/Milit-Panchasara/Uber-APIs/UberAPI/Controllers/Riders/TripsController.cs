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

namespace UberAPI.Controllers.Riders
{
    [Authorize(Roles = UserRoles.RiderRole + "," + UserRoles.AdminRole)]
    [Route("api/rider/{id}/[controller]")]
    [ApiController]
    public class TripsController : ControllerBase
    {
        private readonly ITripRepo tripRepo;
        private readonly IRiderRepo riderRepo;
        private readonly ILocationRepo locationRepo;
        private readonly IRideTypeRepo rideTypeRepo;

        public TripsController(ITripRepo tripRepo, IRiderRepo riderRepo, ILocationRepo locationRepo, IRideTypeRepo rideTypeRepo)
        {
            this.tripRepo = tripRepo;
            this.riderRepo = riderRepo;
            this.locationRepo = locationRepo;
            this.rideTypeRepo = rideTypeRepo;
        }

        // GET: api/rider/{id}/trips
        [HttpGet]
        public ActionResult<IEnumerable<VTripsData>> GetAllTrips(int id)
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

            return tripRepo.GetAllTrips(id).OrderByDescending(x => x.TripId).ToList();
        }

        // GET: api/rider/{id}/trips/{tripId}
        [HttpGet("{tripId}")]
        public ActionResult<VTripsData> GetTrip(int id, int tripId)
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

            var trip = tripRepo.GetTrip(id, tripId);
            if (trip == null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Trip not found!" });
            return trip;
        }

        // PUT: api/rider/{id}/trips/{tripId}
        [HttpPut("{tripId}")]
        public ActionResult<VTripsData> UpdateTrip(int id, int tripId, UpdateTripInput request)
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

            var tripActionTypes = new List<string>() { TripAction.TripCancelled, TripAction.TripCompleted, TripAction.TripStarted };


            if (!tripActionTypes.Contains(request.Action) || Convert.ToInt64(id) != request.RiderId || Convert.ToInt64(tripId) != request.TripId)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Error occured! Invalid request data." });
            }


            var tripDataNew = tripRepo.UpdateTrip(request);

            if (tripDataNew == null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Error occured while updating trip!" });
            return tripDataNew;
        }

        // POST: api/rider/{id}/trips/search
        [HttpPost("search")]
        public ActionResult SetTempTrip(int id, TempTrip tempTrip)
        {
            tempTrip.RiderId = id;
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

            // assigning random driver to trip who is currently not doing any trips
            var driver = tripRepo.FindDriver(tempTrip.RideTypeId);

            if(driver != null)
            {

                if(Startup.tempTripCache.Keys.Any(x => x.Item2 == id))
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "We're already searching for the ride." });
                }

                var tuple = new Tuple<long, long>((long)driver, id);
                if (Startup.tempTripCache.ContainsKey(tuple))
                {
                    Startup.tempTripCache.Remove(tuple);
                }
                Startup.tempTripCache.Add(tuple, tempTrip);
                
                return Ok();
            }

            return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "No drivers are available at the moment." });
        }

        // DELETE: api/rider/{id}/trips/search
        [HttpDelete("search")]
        public ActionResult RemoveTempTrip(int id)
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

            var key = Startup.tempTripCache.Keys.FirstOrDefault(x => x.Item2 == id);
            if(key == null)
            {
                return Ok();
            }
            var data = Startup.tempTripCache.Remove(key);
            return StatusCode(StatusCodes.Status200OK, new Response { Status = "Error", Message = "No driver found, please try again." }); ;
        }

    }
}
