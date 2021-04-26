using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day14.Models;
using Day14.Models.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Day14.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase
    {

        private readonly Day14AssignmentContext context;
        IOrder order;
        public OrderController(IOrder order, Day14AssignmentContext _context)
        {
            this.order = order;
            context = _context;
        }
        // to place a order
        [HttpPost]
        public string Create([FromBody] PlaceOrder AddOrder)
        {
            try
            {
                context.Database.ExecuteSqlRaw($"exec spOrders {AddOrder.customerId},'{AddOrder.Toys}','{AddOrder.Address}'");
                context.SaveChanges();
                Order od = context.Orders.ToList().Last();
                string OrderedToys = od.Toys.Replace(' ', ',').TrimEnd(',');
                int OfferOrdered = od.OfferValue == 7 ? 0 : (od.OfferValue * 10);
                Console.WriteLine($"\tOrder Id : {od.OrderId}\n\tCustomer Id : {od.CustomerId}\n\tPlaced Toys : {OrderedToys}\n\tYour Bill : {od.Bill}");
                Console.WriteLine($"\tOffer applied : {OfferOrdered}%\n\tAddress : {od.Address}");

                return $"\tOrder Id : {od.OrderId}\n\tCustomer Id : {od.CustomerId}\n\tPlaced Toys : {OrderedToys}\n\tYour Bill : {od.Bill}\n\tOffer applied : {OfferOrdered}%\n\tAddress : {od.Address}";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        [HttpGet]
        public IEnumerable<Models.Order> GetAll()
        {
            return order.GetAll();
        }
        // To Get customer by Id, this will return all such orders by customer id
        [HttpGet("{id}")]
        public Models.Order GetById(int id)
        {
            return order.GetById(id);
        }
        // Will find customer by its id
        [HttpGet("{FindId}")]
        public IEnumerable<Models.Order> FindByID(int FindId)
        {
            return order.Find(s => s.OrderId == FindId);
        }
        [HttpGet("{FindCustomerId}")]
        public IEnumerable<Models.Order> FindByCustomer(int FindCustomerId)
        {
            return order.Find(s => s.CustomerId == FindCustomerId);
        }
        [HttpDelete("{deleteId}")]
        public string Delete(int deleteId)
        {
            try
            {
                Order deleteOrder = context.Orders.Single(s => s.OrderId == deleteId);
                order.Delete(deleteOrder);
                return $"Order Id {deleteId} is deleted successfully...";
            }
            catch (Exception)
            {
                return $"Order is not deleted...";
            }
        }
        [HttpPut("{OrderId}")]
        public string Update(int OrderId, [FromBody] PlaceOrder updateOrder)
        {
            try
            {
                Order tryUpdate = context.Orders.Single(s => s.OrderId == OrderId);
                tryUpdate.CustomerId = updateOrder.customerId;
                tryUpdate.Toys = updateOrder.Toys;
                tryUpdate.Bill = order.Bill(updateOrder.Toys);
                tryUpdate.Address = updateOrder.Address;
                tryUpdate.OfferValue = order.Offer(tryUpdate.Bill);

                order.Update(tryUpdate);

                return $"Order {OrderId} is updated successfully...";
            }
            catch (Exception)
            {
                return $"Order is not updated...";
            }
        }
        [HttpGet]
        public bool Any()
        {
            return order.Any();
        }
        [HttpGet("{CustomerId}")]
        public bool Any(int CustomerId)
        {
            return order.Any(s => s.CustomerId == CustomerId);
        }
 
    }
}
