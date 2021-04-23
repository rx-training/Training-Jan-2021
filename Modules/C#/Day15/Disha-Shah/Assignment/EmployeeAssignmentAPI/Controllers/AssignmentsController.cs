using EmployeeAssignmentAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeAssignmentAPI.Controllers
{
    [Route("{empId}/child/assignments")]
    [ApiController]
    public class AssignmentsController : ControllerBase
    {
        private readonly EmpAssignmentDBContext context;

        public AssignmentsController(EmpAssignmentDBContext ctx)
        {
            context = ctx;
        }

        // Get information of all assignments, assigned to particular employee
        [HttpGet]
        public ActionResult<List<Employee>> GetAllAssignments(long empId)
        {
            IList<Assignment> allAssignments = context.Assignments
                                        .Include("Employee")
                                       .Where(x => x.EmployeeId == empId)
                                       .Select(s => new Assignment()
                                       {
                                           AssignmentId = s.AssignmentId,
                                           AssignmentName = s.AssignmentName,
                                           AssignmentStatus = s.AssignmentStatus,
                                           StartDate = s.StartDate,
                                           EndDate = s.EndDate,
                                           EmployeeId = s.EmployeeId,
                                           Employee = new Employee()
                                           {
                                               EmpId = s.Employee.EmpId,
                                               FirstName = s.Employee.FirstName,
                                               MiddleName = s.Employee.MiddleName,
                                               LastName = s.Employee.LastName,
                                               HireDate = s.Employee.HireDate,
                                               Gender = s.Employee.Gender,
                                               AddressLine1 = s.Employee.AddressLine1,
                                               City = s.Employee.City
                                           }
                                       })
                                    .ToList<Assignment>();

            if (allAssignments.Count == 0)
            {
                return NotFound();
            }

            return Ok(allAssignments);
        }

        // Get information of particular assignment, assigned to particular employee
        [HttpGet("{assignmentId}")]
        public ActionResult<List<Employee>> GetAssignment(long empId, long assignmentId)
        {
            IList<Assignment> assignment = context.Assignments
                                                    .Include("Employee")
                                                   .Where(x => x.EmployeeId == empId && x.AssignmentId == assignmentId)
                                                   .Select(s => new Assignment()
                                                   {
                                                       AssignmentId = s.AssignmentId,
                                                       AssignmentName = s.AssignmentName,
                                                       AssignmentStatus = s.AssignmentStatus,
                                                       StartDate = s.StartDate,
                                                       EndDate = s.EndDate,
                                                       EmployeeId = s.EmployeeId,
                                                       Employee = new Employee()
                                                       {
                                                           EmpId = s.Employee.EmpId,
                                                           FirstName = s.Employee.FirstName,
                                                           MiddleName = s.Employee.MiddleName,
                                                           LastName = s.Employee.LastName,
                                                           HireDate = s.Employee.HireDate,
                                                           Gender = s.Employee.Gender,
                                                           AddressLine1 = s.Employee.AddressLine1,
                                                           City = s.Employee.City
                                                       }
                                                   })
                                                .ToList<Assignment>();

            if (assignment.Count == 0)
            {
                return NotFound();
            }

            return Ok(assignment);
        }

        // Add new assignment
        [HttpPost]
        public ActionResult PostNewAssignment(Assignment assignment, long empId)
        {

            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            context.Assignments.Add(new Assignment()
            {
                AssignmentName = assignment.AssignmentName,
                AssignmentStatus = assignment.AssignmentStatus,
                StartDate = assignment.StartDate,
                EndDate = assignment.EndDate,
                EmployeeId = empId
            });

            context.SaveChanges();

            return Ok();
        }

        // Update assignment
        [HttpPut("{assignmentId}")]
        public ActionResult PutAssignment(AssignmentDTO assignmentDTO, long empId, long assignmentId)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid data");

            var existingAssignment = context.Assignments.Where(s => s.AssignmentId == assignmentId && s.EmployeeId == empId)
                                                    .SingleOrDefault<Assignment>();

            if (existingAssignment != null)
            {
                existingAssignment.AssignmentStatus = assignmentDTO.AssignmentStatus;
                existingAssignment.StartDate = assignmentDTO.StartDate;
                existingAssignment.EndDate = assignmentDTO.EndDate;

                context.SaveChanges();
            }
            else
            {
                return NotFound();
            }

            return Ok();
        }
    }
}
