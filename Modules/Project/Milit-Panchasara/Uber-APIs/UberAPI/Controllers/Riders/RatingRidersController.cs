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

namespace UberAPI.Riders.Controllers
{
    [Authorize(Roles = UserRoles.RiderRole)]
    [Route("api/rider/{id}/ratings")]
    [ApiController]
    public class RatingRidersController : ControllerBase
    {
        private readonly IRatingByRiderRepo ratingByRiderRepo;
        private readonly IRiderRepo riderRepo;

        public RatingRidersController(IRatingByRiderRepo ratingByRiderRepo, IRiderRepo riderRepo)
        {
            this.ratingByRiderRepo = ratingByRiderRepo;
            this.riderRepo = riderRepo;
        }

        // GET: api/rider/{id}/ratings
        [HttpGet]
        public ActionResult<IEnumerable<RatingRider>> GetRatingRiders(int id)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!riderRepo.ValidateRider(cred, id))
            {
                return Unauthorized();
            }
            return ratingByRiderRepo.Find(x => x.RiderId == id).ToList();
        }

        // GET: api/rider/{id}/ratings/{tripId}
        [HttpGet("{tripId}")]
        public ActionResult<RatingRider> GetRatingRider(int id, long tripId)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!riderRepo.ValidateRider(cred, id))
            {
                return Unauthorized();
            }
            var ratingRider = ratingByRiderRepo.Find(x => x.TripId == tripId).SingleOrDefault();

            if (ratingRider == null)
            {
                return NotFound();
            }

            return ratingRider;
        }

        // POST: api/rider/{id}/ratings
        [HttpPost]
        public ActionResult<RatingRider> PostRatingRider(int id, RatingRider ratingRider)
        {
            var cred = User.Claims.FirstOrDefault(c => c.Type == "UserId").Value;
            if (!riderRepo.ValidateRider(cred, id) || id != ratingRider.RiderId)
            {
                return Unauthorized();
            }

            var ratingExist = ratingByRiderRepo.Find(x => x.TripId == ratingRider.TripId).SingleOrDefault();

            if (ratingExist != null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Rating already given!" });
            }
            ratingRider.CreatedAt = DateTime.Now;

            return ratingByRiderRepo.Add(ratingRider);
        }
    }
}
