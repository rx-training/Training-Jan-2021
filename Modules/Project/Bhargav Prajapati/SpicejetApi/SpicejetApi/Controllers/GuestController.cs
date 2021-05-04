using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpicejetApi.Authentication;
using SpicejetApi.Models;
using SpicejetApi.Models.IRepositoryHotel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SpicejetApi.Controllers
{
    [Route("Guest/[controller]")]
    [ApiController]
    public class GuestController : ControllerBase
    {
        private readonly IGuestRepository repository;
        public GuestController(IGuestRepository repository)
        {
            this.repository = repository;
        }

        // All the Guest
        [Authorize (Roles =UserRoles.Admin)]
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(repository.GetAll());
            }
            catch(Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        // GET Guest By Id
        [Authorize(Roles = UserRoles.User)]
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            try
            {
                return Ok(repository.GetById(id));

            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        // Inserting Guest
        [Authorize(Roles = UserRoles.User)]
        [HttpPost]
        public ActionResult Post(Guste guste)
        {
            try
            {
                repository.Insert(guste);
                return Ok("Data is inserted Successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }
        }

        // Update Recored
        [HttpPut]
        [Authorize(Roles = UserRoles.User)]
        public ActionResult Put(Guste guste)
        {
            try
            {
                repository.Update(guste);
                return Ok("Data is updated Successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }

        }

        // DELETE The Recored From Database
        [HttpDelete]
        [Authorize(Roles = UserRoles.User)]
        public ActionResult Delete(Guste guste)
        {
            try
            {
                repository.Delete(guste);
                return Ok("Data is Deleted Successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }
    }
}
