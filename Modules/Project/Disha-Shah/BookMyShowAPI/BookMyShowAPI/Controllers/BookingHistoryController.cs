using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Controllers
{
    [Route("api/BookMyShow/myprofile/[controller]")]
    [ApiController]
    public class BookingHistoryController : ControllerBase
    {
        private readonly IBookingHistory bookingHistories;

        public BookingHistoryController(IBookingHistory context)
        {
            bookingHistories = context;
        }

        // GET: api/BookMyShow/myprofile/BookingHistory/9123445239
        [Authorize]
        [HttpGet("{contactno}")]
        public ActionResult<IEnumerable<VBookingHistory>> GetBookingHistoriesByContact(string contactno)
        {
            var bookingHistory = bookingHistories.GetBookingHistory(contactno);

            if (bookingHistory == null)
            {
                return NotFound();
            }

            return Ok(bookingHistory);
        }
    }
}
