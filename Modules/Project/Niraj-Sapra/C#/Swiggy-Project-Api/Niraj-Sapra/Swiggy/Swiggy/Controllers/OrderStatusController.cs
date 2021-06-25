using Microsoft.AspNetCore.Mvc;
using Swiggy.Models;
using Swiggy.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Swiggy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderStatusController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        IOrderStatus Category;
        public OrderStatusController(IOrderStatus custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.OrderStatus> AddNewDataMethod()
        {
            return Category.GetAll();
        }


        [HttpPost]
        public string creates([FromBody] OrderStatus obEntity)
        {

            OrderStatus check = context.OrderStatuses.FirstOrDefault(s => s.OrderStatus1 == obEntity.OrderStatus1);
            if (check != null)
                //new Exception("Create is already exists...");
                return "OrderStatus is already exists...";
            else
            {
                Category.Create(obEntity);
                OrderStatus ObjEntity = context.OrderStatuses.ToList().Last();
                return $"OrderStatus {ObjEntity.OrderStatus1} is added successfully and your id is {ObjEntity}";
            }
        }


        // DELETE: api/Cosutomer/5
        [HttpDelete("{id}")]
        public string Deletes([FromBody] int id)
        {
            try
            {
                var dataDelete = context.OrderStatuses.Single(s => s.OrderStatusId == id);
                Category.Delete(dataDelete);
                return "OrderStatus is remove successfully";
            }
            catch (Exception)
            {
                return $"OrderStatus is not found...";
            }
        }
    }
}
