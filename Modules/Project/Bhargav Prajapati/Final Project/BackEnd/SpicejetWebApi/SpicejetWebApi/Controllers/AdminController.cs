using Microsoft.AspNetCore.Mvc;
using SpicejetWebApi.IRepository;
using System;

namespace SpicejetWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository repository;
        public AdminController(IAdminRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public ActionResult GetAllAdmin()
        {
            try
            {
                return Ok(repository.GetAllAdmin());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
