using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpicejetWebApi.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelBookingCrudController : ControllerBase
    {
        private readonly IHotelBookingCrudRepository repository;
        public HotelBookingCrudController(IHotelBookingCrudRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public ActionResult GetAllBooking()
        {
            try
            {
                return Ok(repository.GetAllHotelBooking());
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
