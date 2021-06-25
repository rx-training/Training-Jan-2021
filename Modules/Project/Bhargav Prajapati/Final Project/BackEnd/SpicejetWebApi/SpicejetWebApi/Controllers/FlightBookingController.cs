using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpicejetAPI.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightBookingController : ControllerBase
    {
        private readonly IFlightBooking flight;
        private readonly IEmailSender emailsend;
        public FlightBookingController(IFlightBooking flight, IEmailSender emailsend)
        {
            this.flight = flight;
            this.emailsend = emailsend;

        }

        [HttpGet]
        public ActionResult GetAllUser()
        {
            try
            {
                return Ok(flight.GetAllUser());
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }
        [HttpGet("{PnrNumber}/{Email}")]
        public ActionResult GetResultById(string PnrNumber, string Email)
        {
            try
            {
                return Ok(flight.GetUserByPnrNumber(PnrNumber, Email));
            }
            catch (Exception)
            {
                return BadRequest("Error Is Occured");
            }
        }
        [HttpPost]
        public ActionResult InsertRecord(BookingFlight Userdata)
        {
            try
            {

                flight.InsertUser(Userdata);
                var message = new Message(new string[] { Userdata.UserEmail }, "Spicejet Booking Flight ", $"<p style='color:green'>Dear, {Userdata.UserFirstName}  {Userdata.UserMiddleName}  {Userdata.UserLastName} <br> Your Flight PNR Number is :- {Userdata.Pnrnumber} </p>");
                emailsend.sendMessage(message);
                return Ok("Data is Inserted Successfully");

            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }
        [HttpPut("{PnrNumber}")]
        public ActionResult UpdateRecord(string PnrNumber, BookingFlight Userdata)
        {
            try
            {
                flight.UpdateRecord(PnrNumber, Userdata);
                return Ok("data is successfully updated");
            }
            catch (Exception)
            {
                return BadRequest("Error Is Occured");
            }
        }

        [HttpDelete("{PnrNumber}")]
        public ActionResult DeleteRecord(string PnrNumber)
        {
            try
            {
                flight.DeleteBooking(PnrNumber);
                return Ok("data is successfully Deleted");
            }
            catch (Exception)
            {
                return BadRequest("Error Is Occured");
            }
        }
    }
}
