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
    [Authorize (Roles =UserRoles.Admin)]
    [Route("ContectInfo/[controller]")]
    [ApiController]
    public class HotelContectInfoController : ControllerBase
    {
        private readonly IContectInfoRepository repository;
        public HotelContectInfoController(IContectInfoRepository repository)
        {
            this.repository = repository;
        }
        // Get All Address
        [HttpGet]
        public ActionResult GetAllAddress()
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

        // Get Address By Id
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            try
            {
                return Ok(repository.GetById(id));
            }
            catch (Exception )
            {
                return BadRequest("Error is Occured");
            }
        }

        //Insert Record
        [HttpPost]
        public ActionResult Post(Hotelcontectinfo hotelcontectinfo)
        {
            try
            {
                repository.Insert(hotelcontectinfo);
                return Ok("Data is Successfully inserted");
            }
            catch (Exception)
            {
                return BadRequest("error is occured");
            }
        }

        // Update the record
        [HttpPut]
        public ActionResult Put(Hotelcontectinfo hotelcontectinfo)
        {
            try
            {
                repository.Update(hotelcontectinfo);
                return Ok("Data is Successfully Updated");
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }

        // Delete The record
        [HttpDelete]
        public ActionResult Delete(Hotelcontectinfo hotelcontectinfo)
        {
            try
            {
                repository.Delete(hotelcontectinfo);
                return Ok("Data is Deleted Successfully");
            }
            catch(Exception)
            {
                return BadRequest("Error is occured");
            }
        }
    }
}
