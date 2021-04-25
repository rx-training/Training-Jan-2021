using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace person.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        List<Student> studentList = null;
        // GET: api/<PersonController>
        [HttpGet]
        public IEnumerable<Student> Get()
        {
            studentList = StudentList(); 
            return studentList;
        }

        private static List<Student> StudentList()
        {
            return new List<Student>() { new Student() { Id = 1, Name = "jevik", Address = "Gondal" }, new Student() { Id = 2, Name = "pratik", Address = "Surat" } };
        }

        // GET api/<PersonController>/5
        [HttpGet("{id}")]
        public Student Get(int id)
        {
            studentList = StudentList();
            var student = studentList.Find(s => s.Id == id);
            return student;
        }

        // POST api/<PersonController>
        [HttpPost]
        public List<Student> Post([FromBody] Student student)
        {
            studentList = StudentList();
            studentList.Add(student);
            return studentList;
        }

        // PUT api/<PersonController>/5
        [HttpPut("{id}")]
        public Student Put(int id, [FromBody] Student student)
        {
            studentList = StudentList();
            var oldstudent = studentList.Find(s => s.Id == id);
            oldstudent = student;
            return oldstudent;
        }

        // DELETE api/<PersonController>/5
        [HttpDelete("{id}")]
        public Boolean Delete(int id)
        {
            studentList = StudentList();
            var Xstudent = studentList.Find(s => s.Id == id);
            var result = studentList.Remove(Xstudent);
            return result;
        }
    }
}
