using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpicejetWebApi.Authentication;
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
    public class UserHotelBookingController : ControllerBase
    {
        private readonly IHotelUserBookingRepository repository;
        public UserHotelBookingController(IHotelUserBookingRepository repository)
        {
            this.repository = repository;
        }
       // [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet]
        public ActionResult GetAllBooking()
        {
            try
            {
                return Ok(repository.GetAllBooking());
            }
            catch (Exception e)
            {
                return BadRequest(e); 
            }
        }

        [Authorize(Roles = SpicejetUserRoles.User)]
        [HttpGet("{ConformationNumber}")]
        public ActionResult GetBookingById(string ConformationNumber)
        {
            try
            {
                return Ok(repository.GetAllUserByConformationNumber(ConformationNumber));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.User)]
        [HttpPost]
        public ActionResult InsertNewBooking(UserHotelBookingDetail bookingDetail)
        {
            try
            {
                repository.InsertUser(bookingDetail);
                return Ok("User Successfully Inserted");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.User + "," + SpicejetUserRoles.Admin)]
        [HttpPut("{UserId}")]
        public ActionResult UpdateBooking(int UserId, UserHotelBookingDetail bookingDetail)
        {
            try
            {
                repository.UpdateUser(UserId,bookingDetail);
                return Ok("User Is Successfully Updated");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.User + "," + SpicejetUserRoles.Admin)]
        [HttpDelete("{UserId}")]
        public ActionResult DeleteBooking(int UserId)
        {
            try
            {
                repository.DeleteUser(UserId);
                return Ok("User Is Successfully Deleted");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
