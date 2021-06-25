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
    public class PlacedOrderController : ControllerBase
    {
        private readonly AmazonContext context;
        private readonly IPlacedOrder placedOrder;
        private readonly IUserAddress userAddress;
        private readonly IProduct product;
        private readonly IOrder order;
        public PlacedOrderController(IOrder order,IProduct product, IUserAddress userAddress, AmazonContext _context, IPlacedOrder placed)
        {
            this.order = order;
            this.product = product;
            this.context = _context;
            this.placedOrder = placed;
            this.userAddress = userAddress;
        }

        [HttpGet]
        public IEnumerable<PlacedOrder> GetAll()
        {
            return this.placedOrder.GetAll();
        }

        [HttpGet("{placedorderid}")]
        public PlacedOrder GetById(int placedorderid)
        {
            return placedOrder.Find(s => s.PlacedOrderId == placedorderid).First();
        }

        [HttpGet("{UserId}")]
        public IEnumerable<PlacedOrder> GetOrderByUserId(int UserId)
        {
            return placedOrder.Find(s => s.UserId == UserId);
        }

        [HttpGet("{UserId}")]
        public IEnumerable<Product> GetPlacedOrderByUser(int UserId)
        {
            IEnumerable<PlacedOrder> placedOrders = placedOrder.Find(s => s.UserId == UserId);
            List<Product> products = new List<Product>();
            foreach (var item in placedOrders)
            {
                products.Add(product.Find(s => s.ProductId == item.ProductId).First());
            }
            return products;
        }

        [HttpGet("{OrderId}")]
        public string Any(int OrderID)
        {
            return placedOrder.Any(s => s.PlacedOrderId == OrderID) ? $"Order for order id {OrderID} is found..." : $"Order for order id {OrderID} is not found...";
        }

        [HttpGet]
        public bool Any()
        {
            return placedOrder.Any();
        }

        [HttpPost("{AddressId}/{SalerId}")]
        public int Create([FromBody] Order od, int AddressId, int SalerId)
        {
            if (userAddress.Any(s => s.UserAddressId == AddressId))
            {
                PlacedOrder placed = new PlacedOrder();
                placed.UserId = od.UserId;
                placed.ProductId = od.ProductId;
                placed.Bill = od.Bill;
                placed.PlacedStatus = "Not Delivered";
                placed.Quantity = od.Quantity;
                placed.PlacedDate = DateTime.Now;
                placed.SalerId = SalerId;
                placedOrder.Create(placed);
                PlacedOrder lastOrder = context.PlacedOrders.ToList().Last();

                return (int)lastOrder.PlacedOrderId;
            }
            else
            {
                return 0;
            }
        }
        // To create order of multiple items
        [HttpPost("{AddressId}")]
        public bool Creates([FromBody] OrderAll orderAlls , int AddressId)
        {
            if(!order.Any(s=>s.OrderId == orderAlls.OrderId))
            {
                return false;
            }
            long orderId = 0;
            PlacedOrder pc = new PlacedOrder();
            
                pc.AddressId = AddressId;
                pc.ProductId = orderAlls.ProductId;
                pc.UserId = orderAlls.UserId;
                pc.Bill = orderAlls.Bill;
                pc.PlacedStatus = "Not Delivered";
                pc.Quantity = orderAlls.Quantity;
                pc.PlacedDate = DateTime.Now;
                pc.SalerId = orderAlls.SellerId;
                orderId = orderAlls.OrderId;
                placedOrder.Create(pc);
                orderId = 0;

            order.Delete(order.Find(s => s.OrderId == orderAlls.OrderId).First());
            return true;
        }

        [HttpPut("{id}/{status}")]
        public bool Update(int id, String status)
        {
            if (placedOrder.Any(s => s.PlacedOrderId == id))
            {
                PlacedOrder placed = placedOrder.Find(s=> s.PlacedOrderId == id).First();
                placed.PlacedStatus = status;
                placedOrder.Update(placed);
                return true;
            }
            else
                return false;
        }
    }
}
