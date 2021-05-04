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
    [Route("emps/{empId}/child/assignments")]
    [ApiController]
    public class emp_assignmentController : ControllerBase
    {
        private readonly empAssignmentContext context;

        public emp_assignmentController(empAssignmentContext context)
        {
            this.context = context;
        }

        // GET: api/emp_assignment
        [HttpGet]
        public ActionResult<IEnumerable<emp_assignment?>> Getemps(int empid)
        {
            var emp = this.context.employees.SingleOrDefault(x => x.id == empid);
            if(emp == null)
            {
                return null;
            }
            var assignments = context.empAssigned.Include(x => x.assignments).Where(x => x.EmployeeId == empid).Select(x => x.assignments).ToList();

            return assignments;
        }

        // GET: api/emp_assignment/5
        [HttpGet("{id}")]
        public ActionResult<emp_assignment?> Getemp_assignment(int empid, int id)
        {
            var emp =  this.context.employees.SingleOrDefault(x=>x.id==empid);
            var assignment = context.empAssignment.SingleOrDefault(x => x.id == id);
            var assigned = context.empAssigned.SingleOrDefault(x => x.EmployeeId == empid && x.AssignmentId == id);

            if (emp == null || assignment==null || assigned==null)
            {
                return null;
            }

            return assignment;
        }

        // PUT: api/emp_assignment/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public  ActionResult<emp_assignment?> Putemp_assignment(int id, int empid, emp_assignment a)
        {
            var emp = context.employees.SingleOrDefault(x => x.id == empid);
            var assignment = context.empAssignment.SingleOrDefault(x => x.id == id);
            var assigned = context.empAssigned.SingleOrDefault(x => x.EmployeeId == empid && x.AssignmentId == id);

            if (emp==null||assignment==null||assigned==null)
            {
                return null;
            }

            assignment.AssignmentCategory = a.AssignmentCategory;
            assignment.AssignmentName = a.AssignmentName;
            assignment.AssignmentNumber = a.AssignmentNumber;
            assignment.AssignmentProjectedEndDate = a.AssignmentProjectedEndDate;
            assignment.AssignmentStatus = a.AssignmentStatus;
            assignment.AssignmentStatusTypeId = a.AssignmentStatusTypeId;
            assignment.BusinessUnitId = a.BusinessUnitId;
            assignment.CreationDate = a.CreationDate;
            assignment.DepartmentId = a.DepartmentId;
            assignment.EffectiveEndDate = a.EffectiveEndDate;
            assignment.EffectiveStartDate = a.EffectiveStartDate;
            assignment.FullPartTime = a.FullPartTime;
            assignment.GradeId = a.GradeId;
            assignment.id = a.id;
            assignment.links = a.links;
            assignment.LocationId = a.LocationId;
            assignment.ManagerAssignmentId = a.ManagerAssignmentId;
            assignment.ManagerId = a.ManagerId;

            context.SaveChanges();

            return assignment;
        }

        // POST: api/emp_assignment
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<bool> Postemp_assignment(int id, emp_assignment a)
        {
            var emp = context.employees.SingleOrDefault(x => x.id == id);
            if (emp == null)
            {
                return null;
            }
            try
            {
                if (a.id == 0)
                {
                    context.Add(a);
                    context.SaveChanges();
                }

                var assigned = new EmpAssigned();
                assigned.EmployeeId = id;
                assigned.AssignmentId = a.id;
                context.empAssigned.Add(assigned);
                context.SaveChanges();

                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        

        private bool emp_assignmentExists(int id)
        {
            return this.context.empAssignment.Any(e => e.id == id);
        }
    }
}
