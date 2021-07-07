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
    public class ViewSearchedFlightController : ControllerBase
    {
        private readonly IViewSearchedFlightRepository repository;
        public ViewSearchedFlightController(IViewSearchedFlightRepository repository)
        {
            this.repository = repository;
        }
      //  [Authorize(Roles = SpicejetUserRoles.User)]
        [HttpGet]
        public ActionResult GetviewAllFlight()
        {
            try
            {
                return Ok(repository.GetviewAllFlight());
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
