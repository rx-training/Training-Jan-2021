using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ValuesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        static List<string> languages = new List<string>() {
            "C#","ASP.NET","MVC"
            };

        [HttpGet]
        public IEnumerable<string> Get()
        {
            //return new string[] { "Values1", "Values2", "Values3", "Values4" };
            return languages;
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            //return "The value is " + id;
            return languages[id];
        }

        [HttpGet("{id}&{name}")]
        public string Get(int id, string name)
        {
            return name + " has id = " + languages[id];
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {
            languages.Add(value);
        }

        [HttpPut]
        public void Put(int id, [FromBody] string value)
        {
            languages[id] = value;
        }

        [HttpDelete]
        public void Delete(int id)
        {
            languages.RemoveAt(id);
        }
    }
}
