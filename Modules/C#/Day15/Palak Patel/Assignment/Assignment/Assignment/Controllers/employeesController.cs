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
    public class employeesController : ControllerBase
    {
        private readonly empAssignmentContext context;

        public employeesController(empAssignmentContext context)
        {
            this.context = context;
        }

        // GET: api/employees
        [HttpGet]
        public ActionResult<IEnumerable<employees>> Get()
        {
            return context.employees.ToList();
        }

        // GET: api/employees/5
        [HttpGet("{id}")]
        public ActionResult<employees?> Getemployees(int id)
        {
            var employees = context.employees.SingleOrDefault(x=>x.id==id);

            if (employees == null)
            {
                return NotFound();
            }

            return employees;
        }

        // PUT: api/employees/5
        
        [HttpPut("{id}")]
        public ActionResult<employees?> UpdateEmployees(int id, employees employees)
        {
            var emp = context.employees.SingleOrDefault(x => x.id == id);
            if (emp == null)
            {
                return null;
            }
            emp.Address = employees.Address;
            emp.Assignments = employees.Assignments;
            emp.CitizenshipId = employees.CitizenshipId;
            emp.City = employees.City;
            emp.Country = employees.Country;
            emp.DateOfBirth = employees.DateOfBirth;
            emp.DisplayName = employees.DisplayName;
            emp.DrivingLicenseId = employees.DrivingLicenseId;
            emp.FirstName = employees.FirstName;
            emp.Gender = employees.Gender;
            emp.HireDate = employees.HireDate;
            emp.id = employees.id;
            emp.LastName = employees.LastName;
            emp.LicenseNumber = employees.LicenseNumber;
            emp.MaritalStatus = employees.MaritalStatus;
            emp.MiddleName = employees.MiddleName;
            emp.NationalId = employees.NationalId;

            context.SaveChanges();

            return emp;
        }

        // POST: api/employees
        
        [HttpPost]
        public ActionResult<employees> Postemployees(employees employees)
        {
            var emp = new employees();

            emp.Address = employees.Address;
            emp.Assignments = employees.Assignments;
            emp.CitizenshipId = employees.CitizenshipId;
            emp.City = employees.City;
            emp.Country = employees.Country;
            emp.DateOfBirth = employees.DateOfBirth;
            emp.DisplayName = employees.DisplayName;
            emp.DrivingLicenseId = employees.DrivingLicenseId;
            emp.FirstName = employees.FirstName;
            emp.Gender = employees.Gender;
            emp.HireDate = employees.HireDate;
            emp.id = employees.id;
            emp.LastName = employees.LastName;
            emp.LicenseNumber = employees.LicenseNumber;
            emp.MaritalStatus = employees.MaritalStatus;
            emp.MiddleName = employees.MiddleName;
            emp.NationalId = employees.NationalId;

            context.employees.Add(emp);
            context.SaveChanges();

            return emp;
        }
        
    }
}
