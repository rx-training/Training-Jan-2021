using Assignment.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase

    {
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            using (var ctx = new EmpAssignmentContext())
            {
                if (ctx.Employees is null)
                {
                    return ctx.Employees;
                }

                return ctx.Employees.ToList();
            }

        }
        [HttpGet("{id}")]

        public IActionResult GetData(int id)
        {
            using (var ctx = new EmpAssignmentContext())
            {
                var emp = ctx.Employees.SingleOrDefault(x => x.EmpId == id);
                if (emp == null)
                {
                    return NotFound("No data with that ID");

                }
                return Ok(emp);
            }
        }
        [HttpPost]

        public IActionResult Add(Employee emp)
        {
            using (var ctx = new EmpAssignmentContext())
            {
                ctx.Employees.Add(emp);
                ctx.SaveChanges();
                return Ok(ctx.Employees);
            }
        }
        [HttpDelete]
        public IActionResult DeleteEmployee(int id)
        {
            using (var ctx = new EmpAssignmentContext())
            {
                var del = ctx.Employees.SingleOrDefault(x => x.EmpId == id);
                if (del == null)
                {
                    return NotFound("No Student Found");
                }
                ctx.Employees.Remove(del);
                ctx.SaveChanges();
                return Ok(ctx.Employees);
            }
        }
        [HttpPut("{id}")]
        public IActionResult update(int id, [FromBody] Employee emp)
        {
            using (var ctx = new EmpAssignmentContext())
            {
                var up = ctx.Employees.SingleOrDefault(x => x.EmpId == id);
                if (up == null)
                {
                    return NotFound("no record");
                }
               //up.EmpId = emp.EmpId;
                up.FirstName = emp.FirstName;
                up.LastName = emp.LastName;
                up.Dob = emp.Dob;
                up.HireDate = emp.HireDate;
                up.AddressLine1 = emp.AddressLine1;
                up.AddressLine2 = emp.AddressLine2;
                up.Gender = emp.Gender;
                
              //  ctx.Employees.Update(up);
               ctx.SaveChanges();
                return Ok(up);

            }
        }
    }
}
