using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplicationAssignmentDay15.Models;

namespace WebApplicationAssignmentDay15.Controllers
{
    [Route("emps/{empId}/child/[controller]")]
    [ApiController]
    public class AssignmentsController : ControllerBase
    {
        private readonly Day15Context _context;

        public AssignmentsController(Day15Context context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Assignments>>> GetAssignments(int empId)
        {
            var con = _context.Assignments.Include("Employees").Where(e => e.Employees.EmpId == empId).ToListAsync();
            
            return await con;
        }

        
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Assignments>>> GetAssignments(long empId, long id)
        {
            var con = _context.Assignments.Include("Employees").Where(e => e.Employees.EmpId == empId && e.AssignmentId == id).ToListAsync();

            if (con == null)
            {
                return NotFound();
            }

            return await con;
        }


        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public ActionResult<Assignments> PutAssignments(long empId, long id, Assignments assignments)
        {
            if (id != assignments.AssignmentId)
            {
                return BadRequest();
            }

            var con = _context.Assignments.SingleOrDefault(e => e.Employees.EmpId == empId && e.AssignmentId == id);
            
            con.AssignmentName = assignments.AssignmentName;
            con.AssignmentProjectedEndDate = assignments.AssignmentProjectedEndDate;
            con.AssignmentCategory = assignments.AssignmentCategory;
            con.AssignmentStatus = assignments.AssignmentStatus;
            con.CreationDate = assignments.CreationDate;
            con.FullPartTime = assignments.FullPartTime;
            con.GradeId = assignments.GradeId;
            con.JobId = assignments.JobId;
            con.LegalEntityId = assignments.LegalEntityId;
            con.ManagerId = assignments.ManagerId;
            

            //_context.Entry(assignments).State = EntityState.Modified;

            _context.SaveChangesAsync();
            

            return con;
        }

        
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Assignments>> PostAssignments(int empId, Assignments assignments)
        {
            var con = _context.Assignments.FirstOrDefault(e => e.Employees.EmpId == empId);

            if (con == null)
            {
                return NotFound();
            }

            _context.Assignments.Add(assignments);
            await _context.SaveChangesAsync();

            return Ok();

            // return CreatedAtAction("GetAssignments", new { id = assignments.AssignmentId }, assignments);
        }
    }
}
