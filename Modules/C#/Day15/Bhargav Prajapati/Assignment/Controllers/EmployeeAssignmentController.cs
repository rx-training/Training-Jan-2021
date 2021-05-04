using Assignment.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Assignment.Controllers
{
    [Route("emps")]
    [ApiController]
    public class EmployeeAssignmentController : ControllerBase
    {
        private readonly EmployeeAssignmentContext context;
        public EmployeeAssignmentController(EmployeeAssignmentContext ctx)
        {
            context = ctx;
        }


        // GET: api/<EmployeeAssignmentController>
        [HttpGet]
        public ActionResult<List<Employees>> Get()
        {
            var AllEmployees = context.Employees.ToList<Employees>();

            if (AllEmployees.Count == 0)
            {
                return BadRequest("The Data is not Available");
            }
            return Ok(AllEmployees);
            
        }

        // GET api/<EmployeeAssignmentController>/5
        [HttpGet("{empId}/child/Assignments")]
        public ActionResult GetAssignment(int empId)
        {


            var AssigmentbyEmployee = context.Assignments
               .Where(s =>s.Employees.EmployeesId == empId);
                

            if(AssigmentbyEmployee ==null)
            {
                return BadRequest("Data Is Not Avaliable");
            }
            return Ok(AssigmentbyEmployee);           

        }

        [HttpGet ("{empid}/child/assignments/{assignmentid}")]
        public ActionResult getassigmentbyid(int empid, int assignmentid)
        {
            var AssigmentbyEmployee = context.Assignments
               .Where(s => s.Employees.EmployeesId == empid && s.AssignmentsId== assignmentid );

            if(AssigmentbyEmployee== null)
            {
                return BadRequest("Data is Not Avaliable");
            }

            return Ok(AssigmentbyEmployee);


        }

        [HttpPut("{empID}/child/assignments/{AssignmentID}")]

        public ActionResult UpdateAssigment(int empID, int AssignmentID, Assignments assigment)
        {
            var olddata = context.Assignments.SingleOrDefault(s=>s.AssignmentsId== AssignmentID && s.Employees.EmployeesId==empID);
            if (olddata == null)
            {
                return BadRequest("Data Is Not Available");
            }
            else
            {
               
                olddata.AssignmentNumber = assigment.AssignmentNumber;
                olddata.AssigmentCategory = assigment.AssigmentCategory;
                olddata.EndData = assigment.EndData;
                olddata.Grade = assigment.Grade;
                
            }
            context.SaveChanges();

            return Ok("Data is Updated Suceesfully");

        }
    }
}
