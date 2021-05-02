using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using repository.Models;

namespace repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudnetsController : ControllerBase
    {
        List<Studnet> StudentList = null;
        private static List<Studnet> Studentmethods()
        {
            return new List<Studnet>()
            { new Studnet() {Studentid=1, Name="Niraj"},
            };
        }
        // GET: api/Person
        [HttpGet]
        public IEnumerable<Studnet> Get()
        {
            StudentList = Studentmethods();

            return StudentList;
        }

        

        // GET: api/Person/5
        [HttpGet("{id}", Name = "Get")]
        public Studnet Get(int id)
        {
            StudentList = Studentmethods();
            var ob = StudentList.Find(p => p.Studentid == id);
            return ob;
        }

        // POST: api/Person
        [HttpPost]
        public List<Studnet> Post([FromBody] Studnet ob)
        {
            StudentList = Studentmethods();
            StudentList.Add(ob);
            return StudentList;
        }

        // PUT: api/Person/5
        [HttpPut("{id}")]
        public Studnet Put(int id, [FromBody] Studnet ob)
        {
            StudentList = Studentmethods();
            var oldstudent = StudentList.Find(p => p.Studentid == id);
            oldstudent = ob;
            return oldstudent;

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public Boolean Delete(int id)
        {
            StudentList = Studentmethods();
            var oldPerson = StudentList.Find(p => p.Studentid == id);
            var result = StudentList.Remove(oldPerson);
            return result;
        }
        
    }
}
