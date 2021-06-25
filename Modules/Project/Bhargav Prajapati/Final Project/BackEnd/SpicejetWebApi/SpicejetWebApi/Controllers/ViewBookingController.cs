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
    public class ViewBookingController : ControllerBase
    {
        private readonly IBookingCrudRepository repository;
        
        public ViewBookingController(IBookingCrudRepository repository, IEmailSender emailsend)
        {
            this.repository = repository;
            
        }
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
        [HttpDelete("{PNRNumber}")]
        public ActionResult DeleteBooking(string PNRNumber)
        {
            try
            {

               repository.DeleteBooking(PNRNumber);  
                return Ok("Data is successfully Deleted");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }

        }
        [HttpPut("{PNRNumber}")]
        public ActionResult UpdateBooking(string PNRNumber,BookingFlight booking)
        {
            try
            {
                repository.UpdateBooking(PNRNumber,booking);
                return Ok("Data is successfully Deleted");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }

        }
    }
}
