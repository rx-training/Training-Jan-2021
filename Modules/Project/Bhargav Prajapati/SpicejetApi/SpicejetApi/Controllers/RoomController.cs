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
    [Route("Room/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IRoomRepository repository;
        public RoomController(IRoomRepository repository)
        {
            this.repository = repository;
        }
        //Get All Room
        [Authorize (Roles =UserRoles.User)]
        [HttpGet]
        public ActionResult GetAllRoom()
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

        [Authorize(Roles = UserRoles.User)]
        // GET Room By Id
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            try
            {
                return Ok(repository.GetById(id));
            }
            catch(Exception )
            {
                return BadRequ1111est("Error is Occured");
            }
        }

        [Authorize(Roles = UserRoles.Admin)]
        // Inserting New Room
        [HttpPost]
        public ActionResult Post(Room room)
        {
            try
            {
                repository.Insert(room);
                return Ok("Successfully Inserted data");
            }
            catch(Exception)
            {
                return BadRequest("error is Occured");
            }
        }

        [Authorize(Roles = UserRoles.Admin)]
        // Updating room
        [HttpPut]
        public ActionResult Put(Room room)
        {
            try
            {
                repository.Update(room);
                return Ok("Data is successfully Updated");
            }
            catch(Exception)
            {
                return BadRequest("Error is occured");
            }
        }

        [Authorize(Roles = UserRoles.Admin)]
        // Delete the Record
        [HttpDelete]
        public ActionResult Delete(Room room)
        {
            try
            {
                repository.Delete(room);
                return Ok("Data is successfully Deleted");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }
        }
    }
}
