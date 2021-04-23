using Assignment1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Controllers
{
    [Route("emps/{empId}/child/assignments")]
    [ApiController]
    public class AssignmentsController : ControllerBase
    {
        private readonly CSDay15Context context;
        public AssignmentsController(CSDay15Context context)
        {
            this.context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Assignment>?> Get(int empId)
        {
            var emp = context.Employees.SingleOrDefault(x => x.Id == empId);
            if (emp == null)
            {
                return null;
            }
            var assignments = context.AssignedWorks.Include(x => x.Assignment).Where(x => x.EmployeeId == empId).Select(x => x.Assignment).ToList();

            return assignments;
        }

        [HttpPost]
        public ActionResult<bool> Create(int empId, Assignment assignment)
        {
            var emp = context.Employees.SingleOrDefault(x => x.Id == empId);
            if (emp == null)
            {
                return null;
            }
            try
            {
                if (assignment.Id == 0)
                {
                    context.Add(assignment);
                    context.SaveChanges();
                }

                var assigned = new AssignedWork();
                assigned.EmployeeId = empId;
                assigned.AssignmentId = assignment.Id;
                context.AssignedWorks.Add(assigned);
                context.SaveChanges();

                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Assignment?> Show(int empId, int id)
        {
            var emp = context.Employees.SingleOrDefault(x => x.Id == empId);
            var assignment = context.Assignments.SingleOrDefault(x => x.Id == id);
            var assigned = context.AssignedWorks.SingleOrDefault(x => x.EmployeeId == empId && x.AssignmentId == id);
            if (emp == null || assignment == null || assigned == null)
            {
                return null;
            }

            return assignment;
        }

        [HttpPut("{id}")]
        public ActionResult<Assignment?> Edit(int empId, int id, Assignment request)
        {
            var emp = context.Employees.SingleOrDefault(x => x.Id == empId);
            var assignment = context.Assignments.SingleOrDefault(x => x.Id == id);
            var assigned = context.AssignedWorks.SingleOrDefault(x => x.EmployeeId == empId && x.AssignmentId == id);
            if (emp == null || assignment == null || assigned == null)
            {
                return null;
            }

            assignment.ActionCode = request.ActionCode;
            assignment.ActionReasonCode = request.ActionReasonCode;
            assignment.assignmentExtraInformation = request.assignmentExtraInformation;
            assignment.ActualTerminationDate = request.ActualTerminationDate;
            assignment.AssignmentCategory = request.AssignmentCategory;
            assignment.AssignmentName = request.AssignmentName;
            assignment.AssignmentNumber = request.AssignmentNumber;
            assignment.AssignmentProjectedEndDate = request.AssignmentProjectedEndDate;
            assignment.AssignmentStatus = request.AssignmentStatus;
            assignment.AssignmentStatusTypeId = request.AssignmentStatusTypeId;
            assignment.BusinessUnitId = request.BusinessUnitId;
            assignment.CreationDate = request.CreationDate;
            assignment.DefaultExpenseAccount = request.DefaultExpenseAccount;
            assignment.DepartmentId = request.DepartmentId;
            assignment.EffectiveEndDate = request.EffectiveEndDate;
            assignment.EffectiveStartDate = request.EffectiveStartDate;
            assignment.EndTime = request.EndTime;
            assignment.Frequency = request.Frequency;
            assignment.FullPartTime = request.FullPartTime;
            assignment.GradeId = request.GradeId;
            assignment.GradeLadderId = request.GradeLadderId;
            assignment.JobId = request.JobId;
            assignment.LastUpdateDate = DateTime.Now;
            assignment.LegalEntityId = request.LegalEntityId;
            assignment.LocationId = request.LocationId;
            assignment.ManagerAssignmentId = request.ManagerAssignmentId;
            assignment.ManagerId = request.ManagerId;
            assignment.links = request.links;

            context.SaveChanges();


            return assignment;
        }
    }
}
