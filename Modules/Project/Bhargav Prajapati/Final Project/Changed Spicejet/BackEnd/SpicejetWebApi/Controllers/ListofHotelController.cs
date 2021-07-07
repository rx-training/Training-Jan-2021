using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpicejetWebApi.Authentication;
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
    public class ListofHotelController : ControllerBase
    {
        private readonly IListofHotelRepository repository;
        public ListofHotelController(IListofHotelRepository repository)
        {
            this.repository = repository;
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet]
        public ActionResult GetAllList()
        {
            try
            {
                return Ok(repository.GetAlllist());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet("{ListId}")]
        public ActionResult GetById(int ListId)
        {
            try
            {
                return Ok(repository.GetHotelById(ListId));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPost]
        public ActionResult InsertList(ListofHotelDetail listofHotel)
        {
            try
            {
                repository.InsertHotelList(listofHotel);
                return Ok("Hotel List successfully Inserted");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPut("{HotelList}")]
        public ActionResult UpdateList(int HotelList,ListofHotelDetail listofHotel)
        {
            try
            {
                repository.UpdateListofhotel(HotelList,listofHotel);
                return Ok("List of HotelSuccessfully Updated");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpDelete("{HotelList}")]
        public ActionResult DeleteData(int HotelList)
        {
            try
            {
                repository.DeleteListofhotel(HotelList);
                return Ok("List of HotelSuccessfully Deleted");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
