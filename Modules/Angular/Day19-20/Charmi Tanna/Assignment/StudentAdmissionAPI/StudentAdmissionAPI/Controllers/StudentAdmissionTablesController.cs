using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentAdmissionAPI.IRepository;
using StudentAdmissionAPI.Models;

namespace StudentAdmissionAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentAdmissionTablesController : ControllerBase
    {
        IStudent student;

        public StudentAdmissionTablesController(IStudent student)
        {
            this.student = student;
        }
        //private readonly BATAContext _context;

        //public BrandsController(BATAContext context)
        //{
        //    _context = context;
        //}

        // GET: api/Brands
        [HttpGet]
        [Route("AllStudents")]
        public IEnumerable<Models.StudentAdmissionTable> GetStudentAdmissionTables()
        {
            return student.GetAll();
        }


        // GET: api/Brands/5

        //[HttpGet("{id}")]
        [HttpGet]
        [Route("AllStudentsById/{sid}")]
        public ActionResult<StudentAdmissionTable> GetStudentAdmissionTable(int sid)
        {
            var student1 = student.GetById(sid);

            if (student1 == null)
            {
                return NotFound();
            }

            return Ok(student1);
        }

        //// PUT: api/Brands/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[Authorize(Roles = UserRoles.Admin)]
        //[HttpPut("{id}")]
        [HttpPut]
        [Route("UpdateStudentDetails/{sid}")]
        public ActionResult<StudentAdmissionTable> PutBrand(int sid, StudentAdmissionTable students)
        {
            if (sid != students.Sid)
            {
                return BadRequest();
            }
            student.Update(sid, students);
            return students;
        }

        // POST: api/Brands
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        [Route("InsertStudentDetails")]
        public ActionResult<StudentAdmissionTable> PostBrand(StudentAdmissionTable students)
        {
            student.Create(students);
            return students;
        }

        //// DELETE: api/Brands/5
        //[Authorize(Roles = UserRoles.Admin)]
        //[HttpDelete("{id}")]
        [HttpDelete]
        [Route("DeleteStudentDetails/{sid}")]

        public void DeleteBrand(int sid)
        {
            var student1 = student.Find(i => i.Sid == sid).Single();
            student.Delete(student1);
            return;
        }
        //private readonly StudentAdmisssionContext _context;

        //public StudentAdmissionTablesController(StudentAdmisssionContext context)
        //{
        //    _context = context;
        //}

        //// GET: api/StudentAdmissionTables
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<StudentAdmissionTable>>> GetStudentAdmissionTables()
        //{
        //    return await _context.StudentAdmissionTables.ToListAsync();
        //}

        //// GET: api/StudentAdmissionTables/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<StudentAdmissionTable>> GetStudentAdmissionTable(int id)
        //{
        //    var studentAdmissionTable = await _context.StudentAdmissionTables.FindAsync(id);

        //    if (studentAdmissionTable == null)
        //    {
        //        return NotFound();
        //    }

        //    return studentAdmissionTable;
        //}

        //// PUT: api/StudentAdmissionTables/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutStudentAdmissionTable(int id, StudentAdmissionTable studentAdmissionTable)
        //{
        //    if (id != studentAdmissionTable.Sid)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(studentAdmissionTable).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!StudentAdmissionTableExists(id))
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

        //// POST: api/StudentAdmissionTables
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPost]
        //public async Task<ActionResult<StudentAdmissionTable>> PostStudentAdmissionTable(StudentAdmissionTable studentAdmissionTable)
        //{
        //    _context.StudentAdmissionTables.Add(studentAdmissionTable);
        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateException)
        //    {
        //        if (StudentAdmissionTableExists(studentAdmissionTable.Sid))
        //        {
        //            return Conflict();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return CreatedAtAction("GetStudentAdmissionTable", new { id = studentAdmissionTable.Sid }, studentAdmissionTable);
        //}

        //// DELETE: api/StudentAdmissionTables/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteStudentAdmissionTable(int id)
        //{
        //    var studentAdmissionTable = await _context.StudentAdmissionTables.FindAsync(id);
        //    if (studentAdmissionTable == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.StudentAdmissionTables.Remove(studentAdmissionTable);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}

        //private bool StudentAdmissionTableExists(int id)
        //{
        //    return _context.StudentAdmissionTables.Any(e => e.Sid == id);
        //}
    }
}
