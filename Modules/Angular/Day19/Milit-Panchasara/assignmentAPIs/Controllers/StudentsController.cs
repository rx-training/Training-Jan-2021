using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using assignmentAPIs.Models;

namespace assignmentAPIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly AngularDay19Context _context;

        public StudentsController(AngularDay19Context context)
        {
            _context = context;
        }

        // GET: api/Students
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
        {
            var students = await _context.Students.AsNoTracking().ToListAsync();

            foreach (var student in students)
            {
                student.Parents = _context.Parents.AsNoTracking().Where(x => x.StudentId == student.Id).ToList();
                student.EmergencyDetails = _context.EmergencyDetails.AsNoTracking().Where(x => x.StudentId == student.Id).ToList();
                student.ReferenceDetails = _context.ReferenceDetails.AsNoTracking().FirstOrDefault(x => x.StudentId == student.Id);
            }

            return students;
        }

        // GET: api/Students/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(long id)
        {
            var student = await _context.Students.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            student.Parents = _context.Parents.AsNoTracking().Where(x => x.StudentId == student.Id).ToList();
            student.EmergencyDetails = _context.EmergencyDetails.AsNoTracking().Where(x => x.StudentId == student.Id).ToList();
            student.ReferenceDetails = _context.ReferenceDetails.AsNoTracking().FirstOrDefault(x => x.StudentId == student.Id);
            return student;
        }

        // PUT: api/Students/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public ActionResult<Student> PutStudent(long id, Student student)
        {
            if (id != student.Id)
            {
                return BadRequest();
            }

            //_context.Entry(student).State = EntityState.Modified;

            //try
            //{
            //    await _context.SaveChangesAsync();
            //}
            var father = student.Parents.First(x => x.Relation == "father");
            var mother = student.Parents.First(x => x.Relation == "mother");

            var refDetails = student.ReferenceDetails;
            var emergencies = student.EmergencyDetails;

            student.EmergencyDetails = new List<EmergencyDetail>();
            student.ReferenceDetails = null;

            try
            {

                student.Parents = new List<Parent>();
                _context.Entry(student).State = EntityState.Modified;
                _context.SaveChanges();
                _context.Entry(father).State = EntityState.Modified;
                _context.SaveChanges();
                _context.Entry(mother).State = EntityState.Modified;
                _context.SaveChanges();
                _context.Entry(refDetails).State = EntityState.Modified;
                _context.SaveChanges();

                var oldEmergencies = _context.EmergencyDetails.Where(x => x.StudentId == id).ToList();
                _context.RemoveRange(oldEmergencies);
                _context.SaveChanges();

                foreach (var item in emergencies)
                {
                    item.StudentId = student.Id;
                }
                _context.EmergencyDetails.AddRange(emergencies);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            student.Parents = _context.Parents.AsNoTracking().Where(x => x.StudentId == student.Id).ToList();
            student.EmergencyDetails = _context.EmergencyDetails.AsNoTracking().Where(x => x.StudentId == student.Id).ToList();
            student.ReferenceDetails = _context.ReferenceDetails.AsNoTracking().FirstOrDefault(x => x.StudentId == student.Id);
            return student;
        }

        // POST: api/Students
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<Student> PostStudent(Student student)
        {
            var father = student.Parents.First(x => x.Relation == "father");
            var mother = student.Parents.First(x => x.Relation == "mother");

            var refDetails = student.ReferenceDetails;
            var emergencies = student.EmergencyDetails;

            student.EmergencyDetails = new List<EmergencyDetail>();
            student.ReferenceDetails = null;

            student.Parents = new List<Parent>();
            _context.Students.Add(student);
            _context.SaveChanges();

            father.StudentId = student.Id;
            mother.StudentId = student.Id;
            refDetails.StudentId = student.Id;
            foreach (var item in emergencies)
            {
                item.StudentId = student.Id;
            }
            mother.StudentId = student.Id;

            try
            {
                _context.Parents.Add(father);
                _context.SaveChanges();
                _context.Parents.Add(mother);
                _context.SaveChanges();
                _context.ReferenceDetails.Add(refDetails);
                _context.EmergencyDetails.AddRange(emergencies);

                _context.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (StudentExists(student.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStudent", new { id = student.Id }, student);
        }

        // DELETE: api/Students/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<int>> DeleteStudent(long id)
        {
            var parents = _context.Parents.Where(x => x.StudentId == id).ToList();
            var eme = _context.EmergencyDetails.Where(x => x.StudentId == id).ToList();
            var refDetails = _context.ReferenceDetails.First(x => x.StudentId == id);
            var student = await _context.Students.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            _context.Parents.RemoveRange(parents);
            _context.EmergencyDetails.RemoveRange(eme);
            _context.ReferenceDetails.Remove(refDetails);
            _context.Students.Remove(student);
            await _context.SaveChangesAsync();

            return 1;
        }

        private bool StudentExists(long id)
        {
            return _context.Students.Any(e => e.Id == id);
        }
    }
}
