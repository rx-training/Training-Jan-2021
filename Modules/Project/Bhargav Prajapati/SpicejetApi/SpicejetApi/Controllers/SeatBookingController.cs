using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpicejetApi.Authentication;
using SpicejetApi.Models;
using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SpicejetApi.Controllers
{
    [Route("SeatBooking/[controller]")]
    [ApiController]
    public class SeatBookingController : ControllerBase
    {
        private readonly ISeatBookingRepository repository;
        public SeatBookingController(ISeatBookingRepository repo)
        {
            repository = repo;
        }

        [Authorize(Roles = UserRoles.User)]
        // Get All Seat
        [HttpGet]
        public ActionResult GetAllSeat()
        {
            try
            {
                return Ok(repository.GetAll());
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }
        }
        [Authorize(Roles = UserRoles.User)]
        // GET Seat By Id
        [HttpGet("{id}")]
        public ActionResult GetSeatById(int id)
        {
            try
            { 
                return Ok(repository.GetById(id));
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }
        }
        [Authorize(Roles = UserRoles.Admin)]
        // POST api/<SeatBookingController>
        [HttpPost]
        public ActionResult InsertRecord(Seat s)
        {
            try
            { 
                repository.Insert(s);
                return Ok("Data is inserted successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }

        }

        // PUT api/<SeatBookingController>/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut]
        public ActionResult UpdateRecord(Seat s)
        {
            try
            { 
                repository.Update(s);
                return Ok("Data is successfully updated");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }

        }

        // DELETE api/<SeatBookingController>/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete]
        public ActionResult DeleteRecord(Seat s)
        {
            try
            { 
            repository.Delete(s);
            return Ok("Data is Deleted Successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }

        }
    }
}
