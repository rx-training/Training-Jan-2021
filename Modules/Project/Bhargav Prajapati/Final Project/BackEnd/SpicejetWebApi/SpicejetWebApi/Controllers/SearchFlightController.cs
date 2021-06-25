using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpicejetAPI.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchFlightController : ControllerBase
    {
        private readonly IFlightSearchRepository repository;
        public SearchFlightController(IFlightSearchRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public ActionResult SearchFlight()
        {
            try
            {
                return Ok(repository.GetFlight());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
