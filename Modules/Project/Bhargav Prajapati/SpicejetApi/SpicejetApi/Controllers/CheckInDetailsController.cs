using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpicejetApi.Authentication;
using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Controllers
{
    [Route("CheckinDetails/[controller]")]
    [ApiController]
    public class CheckInDetailsController : ControllerBase
    {
        private readonly ICheckInDetailsRepository repository;
        public CheckInDetailsController(ICheckInDetailsRepository repository)
        {
            this.repository = repository;
        }
        [Authorize(Roles = UserRoles.User)]
        [HttpGet ("{PNRNumber}")]
        public ActionResult GetCheckinDetailsBYId(string PNRNumber)
        {
            try
            {
                return Ok(repository.viewcheckinDetails(PNRNumber));
            }
            catch (Exception)
            {
                return Ok("Error is occured");
            }
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpGet]
        public ActionResult GetCheckinDetails()
        {
            try
            {
                return Ok(repository.GetAllcheckinDetails());
            }
            catch (Exception)
            {
                return BadRequest("Error is Occure");
            }
        }


    }
}
