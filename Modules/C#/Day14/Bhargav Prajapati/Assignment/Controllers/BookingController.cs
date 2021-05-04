using Assignment.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBooking booking;
        public BookingController(IBooking bk)
        {
            booking = bk;
        }

        [HttpPost("{toyName}/{custName}")]
        public ActionResult Post(string toyName,string custName)
        {
            try
            {
                booking.bookingdata(toyName, custName);

                return Ok("Data Successfully Added in database");
            }
            catch (Exception)
            {
                return BadRequest("Please Check your data error is occur.......");
            }
        }
    }
}
