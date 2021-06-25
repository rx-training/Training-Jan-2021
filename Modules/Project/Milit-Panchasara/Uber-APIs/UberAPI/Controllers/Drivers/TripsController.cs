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
    [Route("api/driver/{driverId}/[controller]")]
    [ApiController]
    public class TripsController : ControllerBase
    {
        private readonly ITripRepo tripRepo;
        private readonly IDriverRepo driverRepo;
        private readonly ILocationRepo locationRepo;
        private readonly IRideTypeRepo rideTypeRepo;

        public TripsController(ITripRepo tripRepo, IDriverRepo driverRepo, ILocationRepo locationRepo, IRideTypeRepo rideTypeRepo)
        {
            this.tripRepo = tripRepo;
            this.driverRepo = driverRepo;
            this.locationRepo = locationRepo;
            this.rideTypeRepo = rideTypeRepo;
        }

        // GET: api/driver/{driverId}/trips/search
        [HttpGet("search")]
        public ActionResult<List<KeyValuePair<Tuple<long,long>,TempTrip>>?> GetTempTrip(int driverId)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!driverRepo.ValidateDriver(cred, driverId))
            {
                return Unauthorized();
            }
            var rider = driverRepo.Find(x => x.DriverId == driverId).Single();
            if (rider.IsBlocked == true)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
            }

            var keys = Startup.tempTripCache.Keys.Where(x => x.Item1 == driverId).ToList();
            var data = Startup.tempTripCache.Where(x => keys.Contains(x.Key)).ToList();
            if(data.Count == 0)
            {
                return null;
            }
            return data;
        }

        // DELETE: api/driver/{driverId}/trips/search/{riderId}
        [HttpDelete("search/{riderId}")]
        public ActionResult RemoveTempTrip(int driverId, long riderId)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!driverRepo.ValidateDriver(cred, driverId))
            {
                return Unauthorized();
            }
            var rider = driverRepo.Find(x => x.DriverId == driverId).Single();
            if (rider.IsBlocked == true)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
            }

            var key = Startup.tempTripCache.Keys.FirstOrDefault(x => x.Item1 == driverId && x.Item2 == riderId);
            if (key == null)
            {
                return Ok();
            }
            var data = Startup.tempTripCache.Remove(key);
            return StatusCode(StatusCodes.Status200OK, new Response { Status = "Error", Message = "No driver found, please try again." }); ;
        }

        // GET: api/driver/{driverId}/trips
        [HttpGet]
        public ActionResult<IEnumerable<VTripsData>> GetAllTrips(int driverId)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!driverRepo.ValidateDriver(cred, driverId))
            {
                return Unauthorized();
            }
            var rider = driverRepo.Find(x => x.DriverId == driverId).Single();
            if (rider.IsBlocked == true)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
            }

            return tripRepo.GetAllTripsForDriver(driverId).OrderByDescending(x => x.TripId).ToList();
        }

        // POST: api/driver/{driverId}/trips
        [HttpPost]
        public ActionResult<VTripsData> SetNewTrip(int driverId, NewTripInput request)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!driverRepo.ValidateDriver(cred, driverId))
            {
                return Unauthorized();
            }
            var rider = driverRepo.Find(x => x.DriverId == driverId).Single();
            if (rider.IsBlocked == true)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
            }

            var destination = locationRepo.Find(x => x.LocationId == request.DestinationId).SingleOrDefault();
            var source = locationRepo.Find(x => x.LocationId == request.SourceId).SingleOrDefault();
            var rideType = rideTypeRepo.Find(x => x.RideTypeId == request.RideTypeId).SingleOrDefault();

            if (source == null || destination == null || rideType == null || source.LocationId == destination.LocationId)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Error occured!" });
            }

            var tripData = tripRepo.SetNewTrip(driverId, request.RiderId, source, destination, rideType);

            if (tripData == null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Error occured while setting trip!" });
            return tripData;
        }

        // PUT: api/driver/{driverId}/trips/{tripId}
        [HttpPut("{tripId}")]
        public ActionResult<VTripsData> UpdateTrip(int driverId, int tripId, UpdateTripInput request)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!driverRepo.ValidateDriver(cred, driverId))
            {
                return Unauthorized();
            }
            var rider = driverRepo.Find(x => x.DriverId == driverId).Single();
            if (rider.IsBlocked == true)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Account has been block by Admin" });
            }

            var tripActionTypes = new List<string>() { TripAction.TripCancelled, TripAction.TripCompleted, TripAction.TripStarted };


            if (!tripActionTypes.Contains(request.Action) || Convert.ToInt64(tripId) != request.TripId)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Error occured! Invalid request data." });
            }


            var tripDataNew = tripRepo.UpdateTrip(request);

            if (tripDataNew == null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Error occured while updating trip!" });
            return tripDataNew;
        }
    }
}
