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
    }
}
