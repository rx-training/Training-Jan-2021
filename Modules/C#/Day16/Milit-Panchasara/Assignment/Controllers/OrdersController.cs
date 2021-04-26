using Assignment.Code.Interfaces;
using Assignment.Code.SqlServer;
using Assignment.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Assignment.Controllers
{
    [Route("api/customers/{cid}/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderRepository order;

        public OrdersController(IOrderRepository order)
        {
            this.order = order;
        }

        // GET: api/<OrdersController>
        [HttpGet]
        public ActionResult<IEnumerable<Order>> Get(int cid)
        {
            var orders = order.GetAllOrders(cid);
            return orders.ToList();
        }

        // GET api/<OrdersController>/5
        [HttpGet("{id}")]
        public string Get(int cid, int id)
        {
            return "value";
        }

        // POST api/<OrdersController>
        [HttpPost]
        public ActionResult<Order> Post(int cid, [FromBody] IEnumerable<OrderInput> request)
        {
            var orderPlaced = order.CreateOrder(cid, request);
            if(orderPlaced == null)
            {
                return BadRequest();
            }
            else
            {
                return orderPlaced;
            }
        }

        // PUT api/<OrdersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<OrdersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
