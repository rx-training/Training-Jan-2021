using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using Day15.Models;
using System.Linq;
using System.Collections.Generic;

namespace Day15.Controllers
{
    [ApiController]
    [Route("emp/[Action]")]
    public class EmpsController : Controller
    {
        // 
        // GET: /HelloWorld/
        public EmpsController()
        {

        }
        public string Index()
        {
            return "This is my default action...";
        }

        // 
        // GET: /HelloWorld/Welcome/ 
        //[HttpGet("{id}")]
        public ActionResult<List<Employee>> GetDisplay(int id)
        {
            Context context = new Context();
            List<Employee> EmpSelected = null;
            EmpSelected = context.Employees.Where(s => s.EmployeeId == id).ToList<Employee>();
            return Ok(EmpSelected);
        }
        //Will return data whose manager id =EmpId
        [HttpGet("{EmpId}")]
        public ActionResult<List<AssignmentController>> GetEmployeeManager(int EmpId)
        {
            Context context = new Context();
            IList<AssignmentController> assignEmployee = null;
            //assignEmployee = context.Assignments.Where(s => s.ManagerId == EmpId).ToList<Assignment>();
            return Ok(assignEmployee);
        }

        [HttpGet("{EmpId}")]
        public IEnumerable<List<AssignmentController>> DisplayEmployeeAssignment(int EmpId,[FromHeader] string AssignmentName)
        {
            Context context = new Context();
            IList<AssignmentController> AssignmentsDT = null;

           // AssignmentsDT = context.Assignments.Where(s => s.EmployeeId == EmpId && s.AssignmentName == AssignmentName).ToList<Assignment>();
            return (IEnumerable<List<AssignmentController>>)Ok(AssignmentsDT);
        }

        [HttpPost]
        public Employee AddEmployee([FromBody] Employee emp)
        {
            Context con = new Context();
            con.Employees.Add(emp);
            con.SaveChanges();
            Employee empAddedd = con.Employees.ToList().Last();
            return empAddedd;
        }

        [HttpPut("{id}")]
        public Employee UpdateaEmployee(int id,[FromBody] Employee emp)
        {
            Context con = new Context();
            var EmpUpdate = con.Employees.SingleOrDefault(s => s.EmployeeId == id);
            EmpUpdate.FullName = emp.FullName;
            EmpUpdate.DisplayName = emp.DisplayName;
            EmpUpdate.City = emp.City;
            EmpUpdate.Address = emp.Address;
            con.SaveChanges();
            Employee UpdatedEmp = con.Employees.Single(s => s.EmployeeId == EmpUpdate.EmployeeId);
            return UpdatedEmp;
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            Context con = new Context();
            try
            {
                Employee DeleteEmp = con.Employees.Single(s => s.EmployeeId == id);
                con.Employees.Remove(DeleteEmp);
                con.SaveChanges();
                return $"Employee {id} is deleted successfully..";
            }
            catch (System.Exception)
            {
                return "Employee is not found";
            }
            
        }

        public string Welcome()
        {
            return "This is the Welcome action method...";
        }
    }


    //[ApiController]
    //[Route("emp/{EmpId}/child/Assignment/{AssignmentName}")]
    //class AssignmentController : Controller
    //{
    //    [HttpGet]
    //    public IEnumerable<List<Assignment>> Get(int EmpId, string AssignmentName)
    //    {
    //        Context context = new Context();
    //        IList<Assignment> AssignmentsDT = null;
    //        AssignmentsDT = context.Assignments.Where(s => s.EmployeeId == EmpId && s.AssignmentName == AssignmentName).ToList<Assignment>();

    //        return (IEnumerable<List<Assignment>>)Ok(AssignmentsDT);
    //    }
    //}
}
