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
    public class ViewHotelBookingController : ControllerBase
    {
        private readonly IViewHotelBookingRepository repository;
        public ViewHotelBookingController(IViewHotelBookingRepository repository)
        {
            this.repository = repository;
        }
        //[Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet]
        public ActionResult GetAllBooking()
        {
            try
            {
                return Ok(repository.GetAllHotelBooking());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.User)]
        [HttpGet("{Conformationcode}")]
        public ActionResult GetByConformationCode(string Conformationcode)
        {
            try
            {
                return Ok(repository.GetAllHotelBookingByCOnformation(Conformationcode));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
