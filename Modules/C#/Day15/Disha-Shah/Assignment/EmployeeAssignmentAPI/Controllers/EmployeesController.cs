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
    [Route("[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly EmpAssignmentDBContext context;

        public EmployeesController(EmpAssignmentDBContext ctx)
        {
            context = ctx;
        }

        // Get all Employees information
        [HttpGet]
        public ActionResult<List<Employee>> GetAllEmployees()
        {
            IList<Employee> allEmployees = context.Employees.ToList<Employee>();

            if (allEmployees.Count == 0)
            {
                return NotFound();
            }

            return Ok(allEmployees);
        }

        // Get information of a particular employee
        [HttpGet("{empId}")]
        public ActionResult<List<Employee>> GetEmployee(long empId)
        {
            List<Employee> employee = context.Employees
                                       .Where(x => x.EmpId == empId)
                                       .ToList();
                                     

            if (employee.Count == 0)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        // Get information of all assignments, assigned to particular employee
        [HttpGet("{empId}/child/assignments")]
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
        [HttpGet("{empId}/child/assignments/{assignmentId}")]
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

        // Add new employee
        [HttpPost]
        public ActionResult PostNewEmployee(Employee employee)
        {

            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            context.Employees.Add(new Employee()
            {
                FirstName = employee.FirstName,
                MiddleName = employee.MiddleName,
                LastName = employee.LastName,
                Gender = employee.Gender,
                HireDate = employee.HireDate,
                AddressLine1 = employee.AddressLine1,
                City = employee.City
            });

            context.SaveChanges();

            return Ok();
        }

        // Add new assignment
        [HttpPost("{empId}/child/assignments")]
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

        // Update employee
        [HttpPut("{empId}")]
        public ActionResult PutEmployee(Employee employee, long empId)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid data");

            var existingEmployee = context.Employees.Where(s => s.EmpId==empId)
                                                    .SingleOrDefault<Employee>();

            if (existingEmployee != null)
            {
                existingEmployee.FirstName = employee.FirstName;
                existingEmployee.MiddleName = employee.MiddleName;
                existingEmployee.LastName = employee.LastName;
                existingEmployee.Gender = employee.Gender;
                existingEmployee.HireDate = employee.HireDate;
                existingEmployee.AddressLine1 = employee.AddressLine1;
                existingEmployee.City = employee.City;

                context.SaveChanges();
            }
            else
            {
                return NotFound();
            }

            return Ok();
        }

        // Update assignment
        [HttpPut("{empId}/child/assignments/{assignmentId}")]
        public ActionResult PutAssignment(AssignmentDTO assignmentDTO, long empId, long assignmentId)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid data");
           
            var existingAssignment = context.Assignments.Where(s => s.AssignmentId == assignmentId && s.EmployeeId==empId)
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
