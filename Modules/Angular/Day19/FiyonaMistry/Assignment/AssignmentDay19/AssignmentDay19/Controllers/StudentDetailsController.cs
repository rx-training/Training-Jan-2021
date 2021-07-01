using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AssignmentDay19.Models;

namespace AssignmentDay19.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentDetailsController : ControllerBase
    {
        private readonly StudentAdmissionContext _context;

        public StudentDetailsController(StudentAdmissionContext context)
        {
            _context = context;
        }

        // GET: api/StudentDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentDetail>>> GetStudentDetails()
        {
            var data = _context.StudentDetails.Include("Addresses").Include("FatherDetails").Include("MotherDetails").Include("EmergencyContacts").Include("ReferenceDetails");
            return await data.ToListAsync();
        }

        // GET: api/StudentDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentDetail>> GetStudentDetail(int id)
        {
            var studentDetail = await _context.StudentDetails.FindAsync(id);

            if (studentDetail == null)
            {
                return NotFound();
            }

            return studentDetail;
        }

        // PUT: api/StudentDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<StudentDetail>> PutStudentDetail(int id, StudentDetail studentDetail)
        {
            if (id != studentDetail.StudentId)
            {
                return BadRequest();
            }

            _context.Entry(studentDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return studentDetail;
        }

        // POST: api/StudentDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StudentDetail>> PostStudentDetail(StudentDetail studentDetail)
        {
            _context.StudentDetails.Add(studentDetail);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetStudentDetail", new { id = studentDetail.StudentId }, studentDetail);
            return Ok(true);
        }

        // DELETE: api/StudentDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentDetail(int id)
        {
            var studentDetail = await _context.StudentDetails.FindAsync(id);
            if (studentDetail == null)
            {
                return NotFound();
            }

            var addressId = await _context.Addresses.SingleOrDefaultAsync(x => x.StudentId == id);
            _context.Addresses.Remove(addressId);
            var fatherId = await _context.FatherDetails.SingleOrDefaultAsync(x => x.StudentId == id);
            _context.FatherDetails.Remove(fatherId);
            var motherId = await _context.MotherDetails.SingleOrDefaultAsync(x => x.StudentId == id);
            _context.MotherDetails.Remove(motherId);
            var emergencyId = _context.EmergencyContacts.Where(x => x.StudentId == id);
            foreach(var i in emergencyId)
            {
                _context.EmergencyContacts.Remove(i);
            }
            var referenceId = _context.ReferenceDetails.Where(x => x.StudentId == id);
            foreach(var i in referenceId)
            {
                _context.ReferenceDetails.Remove(i);
            }

            _context.StudentDetails.Remove(studentDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StudentDetailExists(int id)
        {
            return _context.StudentDetails.Any(e => e.StudentId == id);
        }
    }
}
