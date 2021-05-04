using Assignment.Authentication;
using Assignment.IRepository;
using Assignment.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Assignment.Controllers
{
    [Authorize(Roles =UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class CrudOperationController : ControllerBase
    {
        private readonly Icrudoperation operation;
        public CrudOperationController(Icrudoperation opt)
        {
            operation = opt;
        }
        
        


        // POST api/<CrudOperationController>
        [HttpPost]
        public ActionResult Post([FromBody] Doctor data)
        {
            try
            {
                operation.InsertDoctor(data);

                return Ok("Data is added successfully");
                throw new Exception("Error is Occur");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // PUT api/<CrudOperationController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Doctor data)
        {
            try
            {
                operation.UpdateDoctor(id, data);
                return Ok("Data is Updated");
                throw new Exception("Error is Occur");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // DELETE api/<CrudOperationController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                operation.DeleteDoctor(id);
                return Ok("data is deleted");
                throw new Exception("Error is occurd");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
