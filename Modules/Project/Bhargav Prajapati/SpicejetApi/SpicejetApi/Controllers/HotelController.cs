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
    [Route("Hotel/[controller]")]
    [ApiController]
    public class HotelController : ControllerBase
    {

        private readonly IHotelRepository repository;
        public HotelController(IHotelRepository repository)
        {
            this.repository = repository;
        }
        // get All The hotel data
        [Authorize(Roles = UserRoles.User)]
        [HttpGet]
        public ActionResult GetAllHotel()
        {
            try
            {
                return Ok(repository.GetAll());
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        // GET Hotel ById
        [Authorize(Roles = UserRoles.User)]
        [HttpGet("{id}")]
        public ActionResult GetHotel(int id)
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

        // POST Hotel data
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public ActionResult PostHotel(Hotel hotel)
        {
            try
            {
                repository.Insert(hotel);
                return Ok("Data is Successfully Added");
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        // Update the Record
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut]
        public ActionResult PutHotel(Hotel hotel)
        {
            try
            {
                repository.Update(hotel);
                return Ok("Data is successfully Updated");
            }
            catch(Exception)
            {
                return BadRequest("Error is occured");
            }
        }

        // DELETE The Record
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete]
        public ActionResult DeleteHotel(Hotel hotel)
        {
            try
            {
                repository.Delete(hotel);
                return Ok("Data is Deleted Successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured ");
            }
        }
    }
}
