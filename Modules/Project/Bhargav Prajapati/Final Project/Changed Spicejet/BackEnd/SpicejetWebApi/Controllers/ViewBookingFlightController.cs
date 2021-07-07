using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpicejetWebApi.Authentication;
using SpicejetWebApi.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ViewBookingFlightController : ControllerBase
    {
        private readonly IViewFlightBookingRepository repository;
        public ViewBookingFlightController(IViewFlightBookingRepository repository)
        {
            this.repository = repository;
        }
      [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet]
        public ActionResult GetviewAllBooking()
        {
            try
            {
                return Ok(repository.GetviewAllBooking());
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }
      [Authorize(Roles = SpicejetUserRoles.User)]
        [HttpGet("{PnrNumber}")]
        public ActionResult GetviewBookingByPnrNumber(string PnrNumber)
        {
            try
            {
                return Ok(repository.GetviewBookingByPnrNumber(PnrNumber));
            }
            catch (Exception e)
            {
                return BadRequest(e);  
            }
        }
        
    }


}
