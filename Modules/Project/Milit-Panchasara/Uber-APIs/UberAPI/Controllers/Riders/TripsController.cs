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
    [Authorize(Roles = UserRoles.RiderRole)]
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
        public ActionResult<IEnumerable<VTripsData>> GetTrips(int id)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!riderRepo.ValidateRider(cred, id))
            {
                return Unauthorized();
            }
            return tripRepo.GetAllTrips(id).ToList();
        }

        // GET: api/rider/{id}/trips/{tripId}
        [HttpGet("{tripId}")]
        public ActionResult<VTripsData> GetTrips(int id, int tripId)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!riderRepo.ValidateRider(cred, id))
            {
                return Unauthorized();
            }
            var trip = tripRepo.GetTrip(id, tripId);
            if (trip == null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Trip not found!" });
            return trip;
        }

        // POST: api/rider/{id}/trips
        [HttpPost]
        public ActionResult<VTripsData> SetNewTrip(int id, NewTripInput request)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!riderRepo.ValidateRider(cred, id))
            {
                return Unauthorized();
            }
            var destination = locationRepo.Find(x => x.LocationId == request.DestinationId).SingleOrDefault();
            var source = locationRepo.Find(x => x.LocationId == request.SourceId).SingleOrDefault();
            var rideType = rideTypeRepo.Find(x => x.RideTypeId == request.RideTypeId).SingleOrDefault();

            if (source == null || destination == null || rideType == null || source.LocationId == destination.LocationId)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Error occured!" });
            }

            var tripData = tripRepo.SetNewTrip(id, source.LocationId, destination.LocationId, rideType);

            if(tripData == null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Error occured while setting trip!" });
            return tripData;
        }

        // PUT: api/rider/{id}/trips/{tripId}
        [HttpPut("{tripId}")]
        public ActionResult<VTripsData> SetNewTrip(int id, int tripId, UpdateTripInput request)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!riderRepo.ValidateRider(cred, id))
            {
                return Unauthorized();
            }

            var tripActionTypes = new List<string>() { "TripCancelled", "TripCompleted", "TripStarted" };


            if (!tripActionTypes.Contains(request.Action) || Convert.ToInt64(id) != request.RiderId || Convert.ToInt64(tripId) != request.TripId)
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
