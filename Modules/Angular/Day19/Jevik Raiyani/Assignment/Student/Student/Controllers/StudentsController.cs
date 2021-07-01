using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Student.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Student.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        IStudent _student;

        public StudentsController(IStudent student)
        {
            this._student = student;
        }


        [HttpGet]
        public IEnumerable<Student.Models.Student> GetStudents()
        {
            return _student.GetAll();
        }


        [HttpGet("{id}")]
        public ActionResult<Student.Models.Student> GetStudents(int id)
        {
            var student = _student.GetById(id);

            if (student == null)
            {
                return NotFound();
            }

            return student;
        }

        [HttpPut("{id}")]
        public ActionResult<Student.Models.Student> PutStudents(int id, Student.Models.Student student)
        {

            try
            {
                _student.Update(student);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetStudents(id);

        }

        [HttpPost]
        public ActionResult<Student.Models.Student> PostStudents(Student.Models.Student student)
        {

            try
            {
                _student.Create(student);
            }
            catch (DbUpdateException)
            {
                if (_student.Any(e => e.Id == student.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStudents", new { id = student.Id }, student);
        }
        
        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            var cinema = _student.GetById(id);
            if (cinema == null)
            {
                return NotFound();
            }

            _student.Delete(cinema);

            return NoContent();
        }


    }
}
