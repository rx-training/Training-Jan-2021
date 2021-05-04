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
    [Authorize(Roles = UserRoles.Admin)]
    [Route("HotelAddress/[controller]")]
    [ApiController]
    public class HotelAddressController : ControllerBase
    {
        private readonly IAddressRepository repository;
        public HotelAddressController(IAddressRepository repository)
        {
            this.repository = repository;

        }

       
        //Get All Addreess
        [HttpGet]
        public ActionResult GetAllAddress()
        {
            try
            {
                return Ok(repository.GetAll());
            }
            catch
            {
                return BadRequest("Error is occured");
            }
        }

        // GET api/<HotelAddressController>/5
        [HttpGet("{id}")]
        public ActionResult GetAddressById(int id)
        {
            try
            {
                return Ok(repository.GetById(id));
            }
            catch (Exception)
            {
                return BadRequest("Error is Occureed");
            }
        }

        // Inserted recored
        [HttpPost]
        public ActionResult Post(Address address)
        {
            try
            {
                repository.Insert(address);
                return Ok("Data is Successfully inserted");
            }
            catch (Exception)
            {
                return BadRequest("Erro Is Occured");
            }
        }

        // Update the recored
        [HttpPut]
        public ActionResult Put(Address address)
        {
            try
            {
                repository.Update(address);
                return Ok("Data is successfully Updated"); 

            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }
        }

        // Deleted record
        [HttpDelete]
        public ActionResult Delete(Address address)
        {
            try
            {
                repository.Delete(address);
                return Ok("Data is Deleted Successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error occured");
            }
        }
    }
}
