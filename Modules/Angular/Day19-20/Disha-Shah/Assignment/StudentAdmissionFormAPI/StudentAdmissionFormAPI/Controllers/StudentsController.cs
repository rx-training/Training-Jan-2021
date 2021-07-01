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

        // GET: api/Students
        [HttpGet]
        public ActionResult<List<Student>> GetStudents()
        {
            return Ok(student.GetAllStudents());
        }

        // PUT: api/Students/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public ActionResult Put(int id, Student customerInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            student.UpdateStudent(customerInfo);

            return Ok();
        }


        // POST: api/Students
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult Post(Student customerInfo)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            student.Create(customerInfo);

            return Ok();
        }

        // DELETE: api/Students/5
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
