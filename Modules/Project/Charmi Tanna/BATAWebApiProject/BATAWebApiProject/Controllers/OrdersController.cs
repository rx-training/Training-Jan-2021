using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BATAWebApiProject.Models;
using BATAWebAPI.Models.IRepository;
using BATAWebApiProject.Authentication;
using Microsoft.AspNetCore.Authorization;

namespace BATAWebApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        //private readonly BATAContext _context;

        //public OrdersController(BATAContext context)
        //{
        //    _context = context;
        //}
        IOrder order;
        public OrdersController(IOrder order)
        {
            this.order = order;
        }
        // GET: api/Orders
        [Authorize(Roles = UserRoles.Admin)]
        [HttpGet]
        public IEnumerable<Models.Order> GetOrder()
        {
            return order.GetAll();
        }

        // GET: api/Orders/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpGet("{id}")]
        public ActionResult<Order> GetOrderById(int id)
        {
            var order1 = order.GetById(id);

            if (order1 == null)
            {
                return NotFound();
            }

            return Ok(order1);
        }

        //// PUT: api/Orders/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754

        [HttpPut("{id}")]
        public ActionResult<Order> PutOrder(int id, Order orders)
        {
            if (id != orders.VoucherCode)
            {
                return BadRequest();
            }
            order.Update(id, orders);
            return orders;
        }

        // POST: api/Orders
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<Order> PostOrder(Order orders)
        {
            order.Create(orders);
            return orders;
        }

        //// DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public void DeleteOrder(int id)
        {
            var order1 = order.Find(i => i.VoucherCode == id).Single();
            order.Delete(order1);
            return;
        }
    }
}
