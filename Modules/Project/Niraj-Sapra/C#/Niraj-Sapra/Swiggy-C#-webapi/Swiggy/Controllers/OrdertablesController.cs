using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Swiggy.Models;
using Swiggy.Models.IRepository;

namespace Swiggy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdertablesController : ControllerBase
    {
        private readonly Swiggy_ProjectContext _context;
        IOrder order;
        public OrdertablesController(IOrder ord ,Swiggy_ProjectContext context)
        {
            this.order = ord;
            this._context = context;
        }

        [HttpGet]
        public IEnumerable<Ordertable> AllCityMethod()
        {
            return order.GetAll();
        }
        //[HttpGet("{​id}​")]
        [HttpGet("{id}")]
        public ActionResult<Ordertable> GetCitys(int id)
        {
            var city = order.GetById(id);

            if (city == null)
            {
                return NotFound();
            }
            else
            {
                return city;
            }
        }

        [HttpPost]
        public string creates([FromBody] Ordertable addCity)
        {
            /*Ordertable checkcity = _context.Ordertables.FirstOrDefault(s => s.Orderid = null);
            if (checkcity != null)
            {
                return "Category is already exists...";
            }
            else
            {
*/              order.Create(addCity);
                Ordertable addedCity = _context.Ordertables.ToList().Last();
                return $"Ordertable {addedCity.Orderid} is added successfully and your id is";
  /*          }
*/        }

        //Delete
        [HttpDelete("{id}")]
        public IActionResult DeleteCity(int id)
        {
            var cityes = order.GetById(id);
            if (cityes == null)
            {
                return NotFound();
            }

            order.Delete(cityes);

            return NoContent();
        }

        //Put

        [HttpPut("{id}")]
        public ActionResult<Ordertable> PutCity(int id, Ordertable city)
        {
            try
            {
                order.Update(city);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetCitys(id);

        }

    }
}
