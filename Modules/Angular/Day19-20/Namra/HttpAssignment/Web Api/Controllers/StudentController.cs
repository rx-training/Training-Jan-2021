using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StudentAngular.Model;
using StudentAngular.Model.IRepo;

namespace StudentAngular.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class StudentController : Controller
    {
        IStudent student;
        public StudentController( IStudent student)
        {
            this.student = student;
        }

        [HttpGet]
        public IEnumerable<Student> GetAll()
        {
            return student.GetAll();
        }

        [HttpGet("{Id}")]
        public Student GetById(int Id)
        {
            return student.GetById(Id);
        }

        [HttpGet]
        public bool Any()
        {
            return student.Any();
        }
        //To check whether any such record found for particular student id
        [HttpGet("{Id}")]
        public bool AnyById(int Id)
        {
            return student.Any(s=>s.StudentId == Id);
        }

        [HttpGet("{Name}")]
        public bool AnyByName(string Name)
        {
            return student.Any(s => s.StudentFirstName == Name);
        }

        [HttpPost]
        public bool Create([FromBody]Student std)
              {
            if(student.Any(s=> s.StudentFirstName == std.StudentFirstName && s.StudentLastName == std.StudentLastName && s.Contact == std.Contact))
            {
                return false;
            }
            else
            {
                student.Create(std);
                return true;
            }
        }

        [HttpPut]
        public string Update([FromBody] Student std)
        {
            if (student.Any(s => s.StudentId == std.StudentId))
            {
                student.Update(std);
                return $"Student data of id : {std.StudentId} is updated...";
            }
            else
                return $"please enter a valid student id to update data...";
        }
        [HttpDelete("{Id}")]
        public bool Delete(int Id)
        {
            if (student.Any(s => s.StudentId == Id))
            {
                student.Delete(student.GetById(Id));
                return true;
            }
            else
                return false;
        }
    }
}
