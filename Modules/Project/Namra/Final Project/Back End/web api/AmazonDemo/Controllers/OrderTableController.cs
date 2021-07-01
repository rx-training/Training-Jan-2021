using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AmazonDemo.Models;
using AmazonDemo.Models.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace AmazonDemo.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderTableController : Controller
    {
        private readonly AmazonContext context;
        IOrderTable orderTable;
        private readonly IOrder order;

        public OrderTableController(AmazonContext context,IOrderTable orderTable, IOrder order)
        {
            this.order = order;
            this.context = context;
            this.orderTable = orderTable;
        }

        [HttpGet]
        public IEnumerable<OrderTable> GetAll()
        {
            return orderTable.GetAll();
        }
    }
}
