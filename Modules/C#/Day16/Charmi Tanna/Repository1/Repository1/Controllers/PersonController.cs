using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WEBAPI.Models;

namespace WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        List<Person> personList=null;
        // GET: api/Person
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            personList = PersonList();

            return personList;
        }

        private static List<Person> PersonList()
        {
            return new List<Person>()
            { new Person() {Id = 1, Name = "Reena",Description = "Ahmedbad" },
                new Person() { Id = 2, Name = "Roha",Description = "Calcutta" } };
        }

        // GET: api/Person/5
        [HttpGet("{id}", Name = "Get")]
        public Person Get(int id)
        {
            personList = PersonList();
            var person = personList.Find(p => p.Id == id);
            return person;
        }

        // POST: api/Person
        [HttpPost]
        public List<Person> Post([FromBody] Person person)
        {
            personList = PersonList();
            personList.Add(person);
            return personList;
        }

        // PUT: api/Person/5
        [HttpPut("{id}")]
        public Person Put(int id, [FromBody] Person person)
        {
            personList = PersonList();
            var oldPerson = personList.Find(p => p.Id == id);
            oldPerson = person;
            return oldPerson;

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public Boolean Delete(int id)
        {
            personList = PersonList();
            var oldPerson = personList.Find(p => p.Id == id);
           var result= personList.Remove(oldPerson);
            return result;
        }
    }
}
