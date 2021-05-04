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
    public class DeleteBookingController : ControllerBase
    {
        private readonly IDeleteBooking booking;
        public DeleteBookingController(IDeleteBooking del)
        {
            booking = del;
        }

        [HttpDelete ("{ToyName}/{CustomerName}")]

        public ActionResult DeleteData(string ToyName,string CustomerName)
        {
            try
            {
                booking.DeleteBooking(ToyName, CustomerName);
                return Ok("Data is Removed");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
