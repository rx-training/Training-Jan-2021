using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplicationPractice.Models;
using WebApplicationPractice.Models.IRepository;

namespace WebApplicationPractice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        IStudents students;

        public StudentsController(IStudents students)
        {
            this.students = students;
        }

        [HttpGet]
        public IEnumerable<Student> GetStudent()
        {
            return students.GetAll();
        }

        [HttpGet("{id}")]
        public Student GetStudent(int id)
        {
            return students.GetById(id);
        }

        [HttpPost]
        public void PostStudent([FromBody] Student student)
        {
            students.Create(student);
            CreatedAtAction("GetStudent", new { id = student.StudentId}, student);
        }

        [HttpPut("{id}")]
        public void PutStudent(int id, [FromBody] Student student)
        {
            students.Update(id, student);
        }
        
        [HttpDelete("{id}")]
        public void DeleteStudent(int id)
        {
            students.Delete(id);
        }

        //// GET: api/Students
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        //{
        //    return await _context.Students.ToListAsync();
        //}

        //// GET: api/Students/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Student>> GetStudent(int id)
        //{
        //    var student = await _context.Students.FindAsync(id);

        //    if (student == null)
        //    {
        //        return NotFound();
        //    }

        //    return student;
        //}

        //// PUT: api/Students/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutStudent(int id, Student student)
        //{
        //    if (id != student.StudentId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(student).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!StudentExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        //// POST: api/Students
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<Student>> PostStudent(Student student)
        //{
        //    _context.Students.Add(student);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetStudent", new { id = student.StudentId }, student);
        //}

        //// DELETE: api/Students/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteStudent(int id)
        //{
        //    var student = await _context.Students.FindAsync(id);
        //    if (student == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Students.Remove(student);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool StudentExists(int id)
        //{
        //    return _context.Students.Any(e => e.StudentId == id);
        //}
    }
}
