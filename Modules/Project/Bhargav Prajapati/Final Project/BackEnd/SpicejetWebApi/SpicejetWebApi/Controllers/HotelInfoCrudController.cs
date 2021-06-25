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
    public class HotelInfoCrudController : ControllerBase
    {
        private readonly IHotelInfoCrudRepository repository;
        public HotelInfoCrudController(IHotelInfoCrudRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public ActionResult GetAllHotel()
        {
            try
            {
                return Ok(repository.GetAllHotel());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpPost]
        public ActionResult InsertCost(HotelInfo hotel)
        {
            try
            {
                repository.InsertHotel(hotel);
                return Ok("Data is Inserted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpPut("{HotelId}")]
        public ActionResult UpdateCost(int HotelId, HotelInfo hotel)
        {
            try
            {
                repository.UpdateHotel(HotelId,hotel);
                return Ok("Data is Updated Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpDelete("{HotelId}")]
        public ActionResult DeleteCost(int HotelId)
        {
            try
            {
                repository.DeleteHotel(HotelId);
                return Ok("Data is Deleted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
