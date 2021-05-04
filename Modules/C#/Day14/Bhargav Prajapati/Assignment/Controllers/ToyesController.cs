using Assignment.IRepository;
using Assignment.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToyesController : ControllerBase
    {
        protected readonly IToys toys;



        public ToyesController(IToys tt)
        {
            toys = tt;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Toy>> Get()
        {
            return Ok(toys.GetAllToys());
        }

        [HttpGet("{id}")]
        public ActionResult<List<Toy>> Get(int id)
        {
            return toys.GetToysById(id);
        }

        [HttpPost]
        public void Post(Toy tt)
        {
            toys.InsertToys(tt);

        }

        [HttpPut("{id}")]
        public void Put(int id, Toy t)
        {
            toys.UpdateToys(id, t);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            toys.DeleteToys(id);
        }
    }
}
