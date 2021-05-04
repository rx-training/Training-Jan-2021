using Microsoft.AspNetCore.Mvc;
using Practice_Exercise.IRepository;
using Practice_Exercise.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Practice_Exercise.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeachersController : ControllerBase
    {
        protected readonly ITeachers teachers;
        public TeachersController(ITeachers tec)
        {
            teachers = tec;
        }


        // GET: api/<TeachersController>
        [HttpGet]
        public IEnumerable<Teacher> Get()
        {
            return teachers.GetAll();
        }

        // GET api/<TeachersController>/5
        [HttpGet("{id}")]
        public Teacher Get(int id)
        {
            return teachers.GetByID(id);
        }

        // POST api/<TeachersController>
        [HttpPost]
        public void Post([FromBody] Teacher value)
        {
            teachers.InsertRecord(value);
        }

        // PUT api/<TeachersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Teacher value)
        {
            teachers.UpdateRecord(id, value);
        }

        // DELETE api/<TeachersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            teachers.DeleteRecord(id);
        }
    }
}
