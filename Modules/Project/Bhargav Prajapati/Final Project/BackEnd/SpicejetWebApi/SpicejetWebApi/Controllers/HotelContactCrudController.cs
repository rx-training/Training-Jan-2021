using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelContactCrudController : ControllerBase
    {
        private readonly IHotelContactCrudRepository repository;
        public HotelContactCrudController(IHotelContactCrudRepository repository)
        {
            this.repository = repository;

        }
        [HttpGet]
        public ActionResult GetAllContact()
        {
            try
            {
                return Ok(repository.GetAllHotelContect());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpPost]
        public ActionResult InsertCost(HotelContectInfo contact)
        {
            try
            {
                repository.InsertContact(contact);
                return Ok("Data is Inserted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpPut("{CotactId}")]
        public ActionResult UpdateCost(int CotactId, HotelContectInfo contact)
        {
            try
            {
                repository.UpdateContact(CotactId,contact);
                return Ok("Data is Updated Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpDelete("{ContactId}")]
        public ActionResult DeleteCost(int ContactId)
        {
            try
            {
                repository.DeleteContect(ContactId);
                return Ok("Data is Deleted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
