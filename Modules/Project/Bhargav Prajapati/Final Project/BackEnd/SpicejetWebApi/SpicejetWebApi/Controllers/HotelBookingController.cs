using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    public class HotelBookingController : ControllerBase
    {
        private readonly IHotelBooking hotelBooking;
        private readonly IEmailSender emailsend;
        public HotelBookingController(IHotelBooking hotelBooking,IEmailSender emailsend)
        {
            this.hotelBooking = hotelBooking;
            this.emailsend = emailsend;
        }

        [HttpGet]
        public ActionResult GetAllUser()
        {
            try
            {
                return Ok(hotelBooking.GetAllUser()); ;
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }
        [HttpGet("{Conformationcode}/{Email}")]
        public ActionResult GetResultById(string Conformationcode, string Email)
        {
            try
            {
                return Ok(hotelBooking.GetUserByConformation(Conformationcode,Email));
            }
            catch (Exception)
            {
                return BadRequest("Error Is Occured");
            }
        }

        [HttpPost]
        public ActionResult InsertRecord(HotelUserDetail Userdata)
        {
            try
            {

                hotelBooking.InserthotelUser(Userdata);
                var message = new Message(new string[] { Userdata.UserEmail }, "Spicejet Booking Hotel ", $"<p style='color:green'>Dear, {Userdata.UserFirstName}  {Userdata.UserMiddleName}  {Userdata.UserLastName} <br> Your Conformation code is :- {Userdata.UserReferenceNumumbar} </p>");
                emailsend.sendMessage(message);
                return Ok("Data is Inserted Successfully");

            }
            catch (Exception e)
            {
                return BadRequest("Error is Occured"+ e);
            }
        }

        [HttpPut("{Conformationcode}")]
        public ActionResult UpdateRecord(string Conformationcode, HotelUserDetail userdata)
        {
            try
            {
                hotelBooking.UpdateHotelRecord(Conformationcode, userdata);
                return Ok("data is successfully updated");
            }
            catch (Exception)
            {
                return BadRequest("Error Is Occured");
            }
        }

        [HttpDelete("{Conformationcode}")]
        public ActionResult DeleteRecord(string Conformationcode)
        {
            try
            {
                hotelBooking.DeleteHotelBooking(Conformationcode);
                return Ok("data is successfully Deleted");
            }
            catch (Exception)
            {
                return BadRequest("Error Is Occured");
            }
        }

    }
}
