using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
    [Authorize(Roles = UserRoles.Admin)]
    [Route("AirPort/[controller]")]
    [ApiController]
    public class AirPortController : ControllerBase
    {
        private readonly IAirPortRepository repository;

        public AirPortController(IAirPortRepository repo)
        {
            repository = repo;
        }

        // get All The plane
        [HttpGet]
        public ActionResult GetAllPlane()
        {
            try
            {
                return Ok(repository.GetAll());
            }
            catch (Exception)
            {
                return BadRequest("Error Is Occured");
            }
        }

        // get plane by id 
        [HttpGet("{AirportName}")]
        public ActionResult Get(string AirportName)
        {
            try
            {
                return Ok(repository.GetdatabyId(AirportName));
            }
            catch (Exception)
            {
                return BadRequest("Error Is Occured");

            }
        }

        //insert plane
        [HttpPost]
        public ActionResult InsertRecord(Airport airport)
        {
            try
            {
                repository.Insert(airport);
                return Ok("Data is Successfully Inserted");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }
        }

        // update plane
        [HttpPut]
        public ActionResult Updaterecord(Airport airplane)
        {
            try
            {
                repository.Update(airplane);
                return Ok("Data is Successfully Updated");
            }
            catch (Exception)
            {
                return BadRequest("Error is occured");
            }
        }



        // Delete the record
        [HttpDelete]
        public ActionResult Deletedata(Airport a)
        {
            try
            {
                repository.Delete(a);
                return Ok("Data is deleted Successfully");
            }
            catch (Exception)
            {
                return BadRequest("Error is Occured");
            }
        }
    }
}
