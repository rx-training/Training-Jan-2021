using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;


namespace SpicejetWebApi.Authentication
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelCostController : ControllerBase
    {
        private readonly IHotelCostRepository repository;
        public HotelCostController(IHotelCostRepository repository)
        {
            this.repository = repository;
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet]
        public ActionResult GetAllCost()
        {
            try
            {

                return Ok(repository.GetAllCost());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpGet("{costid}")]
        public ActionResult GetcostById(int costid)
        {
            try
            {
                return Ok(repository.GetCostById(costid));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPut("{costid}")]
        public ActionResult UpdateCost(int costid,HotelCostDetail costDetail)
        {
            try
            {
                repository.UpdateCost(costid,costDetail);
                return Ok("Hotel Cost Successfully Updated");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPost]
        public ActionResult InsertCost(HotelCostDetail costDetail)
        {
            try
            {
                repository.InsertCost(costDetail);
                return Ok("Hotel Cost Successfully Inserted");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpDelete("{costid}")]
        public ActionResult DeleteDetails(int costid)
        {
            try
            {
                repository.DeleteCost(costid);
                return Ok("Hotel Cost Successfully Deleted");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
