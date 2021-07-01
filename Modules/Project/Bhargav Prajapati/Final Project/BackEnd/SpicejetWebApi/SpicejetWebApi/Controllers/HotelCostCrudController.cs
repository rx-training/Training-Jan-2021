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
    public class HotelCostCrudController : ControllerBase
    {
        private readonly IHotelCostCrudRepository repository;
        public HotelCostCrudController(IHotelCostCrudRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public ActionResult GetAllCost()
        {
            try
            {
                return Ok(repository.GettAllCost());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpPost]
        public ActionResult InsertCost(HotelCostInfo cost)
        {
            try
            {
                repository.InsertCost(cost);
                return Ok("Data is Inserted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpPut("{CostId}")]
        public ActionResult UpdateCost(int CostId, HotelCostInfo cost)
        {
            try
            {
                repository.UpdateCost(CostId,cost);
                return Ok("Data is Updated Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
        [HttpDelete("{CostId}")]
        public ActionResult DeleteCost(int CostId)
        {
            try
            {
                repository.DeleteCost(CostId);
                return Ok("Data is Deleted Successfully");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
