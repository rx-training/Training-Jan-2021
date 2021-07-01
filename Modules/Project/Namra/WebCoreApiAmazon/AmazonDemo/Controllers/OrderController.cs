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

    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly AmazonContext context;
        IOrder order;
        IProduct product;
        IUser user;
        public OrderController(AmazonContext _context, IOrder _order, IProduct product, IUser user)
        {
            this.context = _context;
            this.order = _order;
            this.product = product;
            this.user = user;
        }

        // To get all order detail
        
        [HttpGet]
        public IEnumerable<Order> GetAllOrder()
        {
            return order.GetAll();
        }

        
        [HttpGet("{Id}")]
        public Order GetOrderById(int Id)
        {
            return context.Orders.Where(s=>s.OrderId == Id).First();
        }

        [HttpGet("{UserId}")]
        public IEnumerable<Order> GetOrderByUserId(int UserId)
        {
            return order.Find(s => s.UserId == UserId);
        }
        
        [HttpGet("{UserId}")]
        public IEnumerable<Product> GetProductByUser(int UserId)
        {
            IEnumerable<Order> orders = order.Find(s => s.UserId == UserId);
            List<Product> products = new List<Product>();
            foreach (var item in orders)
            {
                products.Add(product.Find(s => s.ProductId == item.ProductId).First());
            }
            return products;
        }

        [HttpGet("{OrderId}")]
        public string AnyOrderById(int OrderId)
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
        [HttpGet("{CustomerId}")]
        public string AnyOrderByCustomer(int CustomerId)
        {
            if (order.Any(s => s.UserId == CustomerId))
            {
                return $"Records has been found for customer id :  {CustomerId}";
            }
            else
            {
                return $"Record has not found...";
            }
        }
     

        
        [HttpDelete("{OrderId}")]
        public bool DeleteOrder(int OrderId)
        {
            if (order.Any(s => s.OrderId == OrderId))
            {
                Order deleteOrder = context.Orders.Where(s=> s.OrderId == OrderId).First();
                order.Delete(deleteOrder);
                return true;
            }
            else
            {
                return false;
            }
        }

        
        [HttpPost]
        public int CreateOrder([FromBody] ClassOrder clsOrder)
        {
            if (user.Any(s => s.UserId == clsOrder.UserId) && product.Any(s => s.ProductId == clsOrder.ProductId) && clsOrder.Quantity <= 10)
            {
                context.Database.ExecuteSqlRaw($"exec spOrder {clsOrder.UserId},{clsOrder.ProductId},{clsOrder.Quantity}");

                Order placedOrder = context.Orders.ToList().Last();

                return (int)placedOrder.OrderId;
            }
            else
            {
                return 0;
            }
        }
        
        [HttpPut("{OrderID}")]
        public bool UpdateOrder(int OrderID, [FromBody] ClassOrder clsorder)
        {
            if (user.Any(s => s.UserId == clsorder.UserId))
            {
                if (product.Any(s => s.ProductId == clsorder.ProductId))
                {
                    order.updateOrder(OrderID, clsorder);
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
                return false;
        }
    }
}
