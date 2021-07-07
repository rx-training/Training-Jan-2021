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
    public class AirplaneCostDetailsController : ControllerBase
    {
        private readonly IAirplaneCostDetailsRepository repository;
        public AirplaneCostDetailsController(IAirplaneCostDetailsRepository repository)
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
        [HttpGet("{CostId}")]
        public ActionResult GetCostById(int CostId)
        {
            try
            {
                return Ok(repository.GetCostById(CostId));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPost]
        public ActionResult InsertCost(CostDetail cost)
        {
            try
            {
                repository.InsertCost(cost);
                return Ok("Cost Inserted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpPut("{CostId}")]
        public ActionResult UpdateCost(int CostId, CostDetail cost)
        {
            try
            {
                repository.UpdateCost(CostId,cost);
                return Ok("Cost is Successfully Updated");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [Authorize(Roles = SpicejetUserRoles.Admin)]
        [HttpDelete("{CostId}")]
        public ActionResult DeleteCost(int CostId)
        {
            try
            {
                repository.DeleteCost(CostId);
                return Ok("Cost Deleted Successfully");
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }


    }
}
