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
    public class OrdersController : ControllerBase
    {
        IOrder order;

        public OrdersController(IOrder order)
        {
            this.order = order;
        }

        [HttpGet]
        public IEnumerable<Order> GetOrders()
        {
            return order.GetAll();
        }

        [HttpGet("{id}")]
        public Order GetOrder(int id)
        {
            return order.GetById(id);
        }

        [HttpPost]
        public void PostOrder(int tid, [FromBody] IEnumerable<Order> orders)
        {
            order.CreateOrder(tid, orders);
        }

        [HttpPut("{id}")]
        public void PutOrder(int id, [FromBody] Order orders)
        {
            order.Update(id, orders);
        }

        [HttpDelete("{id}")]
        public void DeleteOrder(int id)
        {
            order.Delete(id);
        }
    }
}
