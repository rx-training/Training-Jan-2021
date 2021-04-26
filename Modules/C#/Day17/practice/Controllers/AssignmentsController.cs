using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Assignment.Models;

namespace Assignment.Controllers
{
    [Route("emps")]
    [ApiController]
    public class AssignmentsController : ControllerBase
    {
        private readonly EmpAssignmentContext _context;

        public AssignmentsController(EmpAssignmentContext context)
        {
            _context = context;
        }

        // GET: emps/Assignments GET ALL ASSIGNMENT
        [HttpGet ]
        public async Task<ActionResult<IEnumerable<Assignment.Models.Assignment>>> GetAssignments()
        {
            return await _context.Assignments.ToListAsync();
        }
        [HttpGet ("{empID}/child/assignments")]
        public async Task<ActionResult<IEnumerable<Assignment.Models.Assignment>>> GetAssignments(int empID)
        {
            var emp = _context.Assignments.Where(e => e.EmpId == empID);
            return await emp.ToListAsync();
        }




        // GET: emps/{empid}/child/assignmetns/{Assignmentid} Get an Assignment

        [HttpGet("{empId}/child/assignments/{Assignmentid}")]


        public async Task<ActionResult<IEnumerable<Assignment.Models.Assignment>>> GetAssignmentsWithEmp(int Assignmentid, int empid)
        {
            var empassigntment = _context.Assignments.Where(e => e.EmpId == empid && e.AssignementId == Assignmentid);
            return await empassigntment.ToListAsync();
        }





        // GET: api/Assignments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Assignment.Models.Assignment>> GetAssignment(int id)
        {
            var assignment = await _context.Assignments.FindAsync(id);

            if (assignment == null)
            {
                return NotFound();
            }

            return assignment;
        }

        // PUT: api/Assignments/5 Update an assignment
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{empID}/child/assignments/{AssignmentID}")]
        public async Task<IActionResult> PutAssignment(int empID, int AssignmentID, Assignment.Models.Assignment assignment)
        {
            if (AssignmentID != assignment.AssignementId)
            {
                return BadRequest();
            }

            _context.Entry(assignment).State = EntityState.Modified;

            try
            {
                var up = _context.Assignments.SingleOrDefault(e => e.AssignementId == AssignmentID && e.EmpId == empID);
                up.AssignmentSatus = assignment.AssignmentSatus;
                up.Lastdate = assignment.Lastdate;
                up.EmpId = empID;
               
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AssignmentExists(AssignmentID))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Assignments Create an Assignments API
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{empID}/child/assignments")]
        public async Task<ActionResult<Assignment.Models.Assignment>> PostAssignment(Assignment.Models.Assignment assignment)
        {
            _context.Assignments.Add(assignment);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AssignmentExists(assignment.AssignementId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAssignment", new { id = assignment.AssignementId }, assignment);
        }

        // DELETE: api/Assignments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAssignment(int id)
        {
            var assignment = await _context.Assignments.FindAsync(id);
            if (assignment == null)
            {
                return NotFound();
            }

            _context.Assignments.Remove(assignment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AssignmentExists(int id)
        {
            return _context.Assignments.Any(e => e.AssignementId == id);
        }
    }
}
