using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Authentication
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelDetailsController : ControllerBase
    {
        private readonly IHotelDetailsRepository repository;
        public HotelDetailsController(IHotelDetailsRepository repository)
        {
            this.repository = repository;
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
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
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet("{HotelId}")]
        public ActionResult GetById(int hotelid)
        {
            try
            {
               return Ok(repository.GetHotelById(hotelid));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }

        }
        [Authorize(Roles = SpicejetUserRoles.Admin+","+ SpicejetUserRoles.User)]
        [HttpPut("{HotelId}")]
        public ActionResult UpdateHotel(int HotelId,HotelDetail hotel)
        {
            try
            {
                repository.UpdateHotel(HotelId, hotel);
                return Ok("Hotel Successfully Updated");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPost]
        public ActionResult InsertHotel(HotelDetail hotel)
        {
            try
            {
                repository.InsertHotel(hotel);
                return Ok("Hotel successfully Inserted");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpDelete ("{HotelId}")]
        public ActionResult DeleteHotel(int HotelId)
        {
            try
            {
                repository.DeleteHotel(HotelId);
                return Ok("Hotel Successfully Deleted");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


    }
}
