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
    public class HotelSearchController : ControllerBase
    {
        private readonly IHotelSearchRepository repository;
        public HotelSearchController(IHotelSearchRepository repository)
        {
            this.repository = repository;                 
        }


        [HttpGet]
        public ActionResult SearchFlight()
        {
            try
            {
                return Ok(repository.GetHotel());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }






    }
}
