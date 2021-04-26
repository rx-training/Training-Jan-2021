using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToyCompanyAPI.IRepository;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.Controllers
{
    [Route("api/Customers")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrder orders;

        public OrdersController(IOrder context)
        {
            orders = context;
        }

        [HttpGet("{id}/Orders")]
        public ActionResult GetOrders(int id)
        {
            //return await customer.Customers.ToListAsync();
            return Ok(orders.GetAllOrders(id));
        }

        [HttpGet("{id}/Orders/{orderid}")]
        public ActionResult<Customer> GetOrder(int id, int orderid)
        {
            var orderInfo = orders.GetByOrderId(id, orderid);

            if (orderInfo == null)
            {
                return NotFound();
            }

            return Ok(orderInfo);
        }


        // POST: api/Customers/1/ShipTo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("{id}/ShipTo/{shipToid}/Toy/{toy}/{qty}")]
        public ActionResult Post(int id, int shipToid, string toy, int qty)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");

            orders.CreateOrder(id, shipToid, toy, qty);

            //return CreatedAtAction("GetCustomer", new { id = customerInfo.Id }, customer);
            return Ok();
        }
    }
}
