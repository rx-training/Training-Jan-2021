using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplicationAssignmentDay14.Models;
using WebApplicationAssignmentDay14.Models.IRepositories;

namespace WebApplicationAssignmentDay14.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToysController : ControllerBase
    {
        IToy toy;

        public ToysController(IToy toy)
        {
            this.toy = toy;
        }

        [HttpGet]
        public IEnumerable<Toy> GetToys()
        {
            return toy.GetAll();
        }

        [HttpGet("{id}")]
        public Toy GetToy(int id)
        {
            return toy.GetById(id);
        }

        [HttpPost]
        public void PostToy([FromBody] Toy toys)
        {
            toy.Create(toys);
        }

        [HttpPut("{id}")]
        public void PutToy(int id, [FromBody] Toy toys)
        {
            toy.Update(id, toys);
        }

        [HttpDelete("{id}")]
        public void DeleteToy(int id)
        {
            toy.Delete(id);
        }
    }
}
