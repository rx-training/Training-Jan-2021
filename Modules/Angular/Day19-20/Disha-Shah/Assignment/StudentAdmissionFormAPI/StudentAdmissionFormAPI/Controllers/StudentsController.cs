using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentAdmissionFormAPI.IRepository;
using StudentAdmissionFormAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAdmissionFormAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IStudent student;

        public StudentsController(IStudent context)
        {
            student = context;
        }

        // GET: api/Customers
        [HttpGet]
        public ActionResult<List<Student>> GetStudents()
        {
            //return await customer.Customers.ToListAsync();
            return Ok(student.GetAll());
        }

        // GET: api/Customers/Reena&Mehta
        [HttpGet("{id}")]
        public ActionResult<Student> GetStudent(int id)
        {
            var studentInfo = student.GetById(id);

            if (studentInfo == null)
            {
                return NotFound();
            }

            return Ok(studentInfo);
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public ActionResult Put(int id, Student customerInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            student.Update(id, customerInfo);

            return Ok();
        }


        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult Post(Student customerInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            student.Create(customerInfo);

            //return CreatedAtAction("GetCustomer", new { id = customerInfo.Id }, customer);
            return Ok();
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public ActionResult DeleteCustomer(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            var studentInfo = student.GetById(id);

            student.Delete(studentInfo);

            return Ok();
        }
    }
}
