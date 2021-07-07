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
    public class ViewHotelSearchController : ControllerBase
    {
        private readonly IViewSearchHotelRepository repository;
        public ViewHotelSearchController(IViewSearchHotelRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public ActionResult GetAllHotel()
        {
            try
            {
                return Ok(repository.GetAllHotel());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}
