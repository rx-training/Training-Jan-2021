using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpicejetApi.Authentication;
using SpicejetApi.Models;
using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Controllers
{
    [Route("Cost/[controller]")]
    [ApiController]
    public class CostController : Controller
    {

        private readonly ICostRepository repository;
        public CostController(ICostRepository repo)
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
        public ActionResult InsertRecord(Totelcostoftrip totelcostoftrip)
        {
            try
            {
                repository.Insert(totelcostoftrip);
                return Ok("Data is inserted successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }

        }

        [Authorize(Roles = UserRoles.Admin)]
        // PUT api/<SeatBookingController>/5
        [HttpPut]
        public ActionResult UpdateRecord(Totelcostoftrip totelcostoftrip)
        {
            try
            {
                repository.Update(totelcostoftrip);
                return Ok("Data is successfully updated");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }

        }

        [Authorize(Roles = UserRoles.Admin)]
        // DELETE api/<SeatBookingController>/5
        [HttpDelete]
        public ActionResult DeleteRecord(Totelcostoftrip totelcostoftrip)
        {
            try
            {
                repository.Delete(totelcostoftrip);
                return Ok("Data is Deleted Successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }

        }
    }
}
