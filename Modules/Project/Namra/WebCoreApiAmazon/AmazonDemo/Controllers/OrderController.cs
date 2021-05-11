using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Authenticate;
using AmazonDemo.Models;
using AmazonDemo.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AmazonDemo.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly AmazonContext context;
        IOrder order;
        IProduct product;
        IUser user;
        public OrderController(AmazonContext _context , IOrder _order, IProduct product, IUser user)
        {
            this.context = _context;
            this.order = _order;
            this.product = product;
            this.user = user;
        }

        // To get all order detail
        [Authorize(Roles = UserRolesAmazon.Admin)]
        [HttpGet]
        public IEnumerable<Order> GetAllOrder()
        {
            return order.GetAll();
        }

        [Authorize]
        [HttpGet("{Id}")]
        public Order GetOrderById(int Id)
        {
            return order.GetById(Id);
        }

        [Authorize]
        [HttpGet("{OrderId}")]
        public string AnyOrderById( int OrderId)
        {
            if (order.Any(s => s.OrderId == OrderId))
            {
                return $"There is an order for order id {OrderId}";
            }
            else
            {
                return $"Sorry, there is no such record found for order id : {OrderId}";
            }
        }
        //To find is there any order is placed by customer id
        [Authorize]
        [HttpGet("{CustomerId}")]
        public string AnyOrderByCustomer(int CustomerId)
        {
            if(order.Any(s=> s.UserId == CustomerId))
            {
                return $"Records has been found for customer id :  {CustomerId}";
            }
            else
            {
                return $"Record has not found...";
            }
        }
        [Authorize]
        [HttpGet("{CustomerId}")]
        public IEnumerable<Order> GetOrderByUserid( int CustomerId)
        {
            IEnumerable<Order> orders = order.GetAll();
            return orders.Where(s => s.UserId == CustomerId);
        }

        [Authorize]
        [HttpDelete("{OrderId}")]
        public string DeleteOrder(int OrderId)
        {
            if(order.Any(s=>s.OrderId == OrderId))
            {
                Order deleteOrder = order.GetById(OrderId);
                order.Delete(deleteOrder);
                return $"Order {OrderId} is deleted successfully....";
            }
            else
            {
                return $"there is no such record has been found for order id : {OrderId}";
            }
        }

        [Authorize]
        [HttpPost]
        public string CreateOrder([FromBody] ClassOrder clsOrder)
        {
            if(user.Any(s=>s.UserId == clsOrder.UserId) && product.Any(s => s.ProductId == clsOrder.ProductId) && clsOrder.Quantity <=10)
            {
                context.Database.ExecuteSqlRaw($"exec spOrders {clsOrder.UserId},{clsOrder.ProductId},{clsOrder.Quantity}");

                Order placedOrder = context.Orders.ToList().Last();

                return $"Hello User {clsOrder}, your order for product id {clsOrder.ProductId} with quantity {clsOrder.Quantity} is placed successfully. Your order id is {placedOrder.OrderId}, Bill is {placedOrder.Bill} and your order is placed at {placedOrder.OrderedDate}";
            }
            else
            {
                return $"Either product id or user id is not valid, or quantity is greater than 10. To make sure your order please make quantity less than 10.";
            }
        }
    }
}
