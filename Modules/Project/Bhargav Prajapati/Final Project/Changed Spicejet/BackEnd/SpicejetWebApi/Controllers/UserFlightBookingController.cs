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
    public class UserFlightBookingController : ControllerBase
    {
        private readonly IUserFlightBookingRepository repository;
       
        public UserFlightBookingController(IUserFlightBookingRepository repository)
        {
            this.repository = repository;
            
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
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
        [HttpGet("{PnrNumber}")]
        public ActionResult GetBookingByPnrNumber(string PnrNumber)
        {
            try
            {
                return Ok(repository.GetByPnrNumber(PnrNumber));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.User)]
        [HttpPost]
        public ActionResult InsertBooking(UserFlightBookingDetail bookingDetail)
        {
            try
            {
                repository.InsertBooking(bookingDetail);
                return Ok("Booking is Successfully Inserted");
                
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.User + "," + SpicejetUserRoles.Admin)]
        [HttpPut("{UserId}")]
        public ActionResult UpdateBooking(UserFlightBookingDetail bookingDetail, int UserId)
        {
            try
            {
                repository.UpdateBooking(bookingDetail, UserId);
                return Ok("Booking Updated Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e );
            }
        }
        [Authorize(Roles = SpicejetUserRoles.User + "," +SpicejetUserRoles.Admin)]
        [HttpDelete("{UserId}")]
        public ActionResult DeleteBooking(int UserId)
        {
            try
            {
                repository.DeleteBooking(UserId);
                return Ok("Booking Deleted Successfully");
                
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
