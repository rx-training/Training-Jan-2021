using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyStoreApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToyStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {

        private IToysRepository _toysRepository;
            public HomeController(IToysRepository toysRepository)
            {
                _toysRepository = toysRepository;

            }
            public ViewResult Index()
            {
                var model = _toysRepository.GetAllToy();
                return View(model);
            }
          
        
        // GET: api/<HomeController>
        [HttpGet]
        public IEnumerable<Toy> Get()
        {
            
            return _toysRepository.GetAllToy();
        }

        // GET api/<HomeController>/5
        [HttpGet("{id}")]
        public Toy Get(int id)
        {

            return _toysRepository.GetToy(id);
        }

        // POST api/<HomeController>
        [HttpPost]
        public Toy Post(Toy newtoy)
        {
            _toysRepository.Add(newtoy);
            return newtoy;
        }

        // PUT api/<HomeController>/5
        [HttpPut]
       public Toy Put(Toy toy)
        {
            var up =_toysRepository.Update(toy);
            return up;
        }

        // DELETE api/<HomeController>/5
        [HttpDelete("{id}")]
        public Toy Delete(int id)
        {
           var toy = _toysRepository.Delete(id);
            return toy;
        }
    }
}
