using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day15.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Day15.Controllers
{
    [ApiController]
    [Route("emp")]
    public class AssignmentController : Controller
    {

        private readonly Context _context;
        public AssignmentController()
        {
            Context context = new Context();
            _context = context;
        }

        [HttpGet("{empID}/Child/Assignment/{AssignmentName}")]
        public async Task<IEnumerable<Day15.Models.Assignment>> GetAssignmentWithEmp(int empID, string AssignmentName)
        {
            var empWithAssignment = _context.Assignments.Where(s => s.AssignmentName == AssignmentName && s.EmployeeId == empID);
            return await empWithAssignment.ToListAsync();
        }
        [HttpGet("{empID}/Child/Assignment")]
        public async Task<IEnumerable<Day15.Models.Assignment>> GetEmployee(int empID)
        {
            var empWithAssignment = _context.Assignments.Where(s => s.EmployeeId == empID);
            return await empWithAssignment.ToListAsync();
        }

        [HttpPost("{empID}/Child/Assignment")]
        public async Task<Day15.Models.Assignment> PostAssignment(int empID, [FromBody] Day15.Models.Assignment addAssi)
        {
            _context.Assignments.Add(addAssi);
            _context.SaveChanges();
            var addedAssignment = _context.Assignments;
            return await addedAssignment.OrderBy(s=> s.AssignmentId).LastAsync();
        }
        [HttpPut("{empID}/Child/Assignment")]
        public async Task<IEnumerable<Day15.Models.Assignment>> PutAssignment(int empID, [FromHeader] string UpdateAssignName)
        {
            var UpdateAssignment =  _context.Assignments.Where(s => s.AssignmentId == empID);
            UpdateAssignment.FirstOrDefault().AssignmentName = UpdateAssignName;
            _context.SaveChanges();
            return await UpdateAssignment.ToListAsync();
        }
    }
}
