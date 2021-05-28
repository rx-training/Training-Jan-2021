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
    public class ShipmentController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        IShipment Category;
        public ShipmentController(IShipment custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.Shipment> AddNewDataMethod()
        {
            return Category.GetAll();
        }

/*
        [HttpPost]
        public string creates([FromBody] Category obEntity)
        {

            Category check = context.Categories.FirstOrDefault(s => s.CategoryName == obEntity.CategoryName);
            if (check != null)
                //new Exception("Create is already exists...");
                return "Customer is already exists...";
            else
            {
                Category.Create(obEntity);
                Category ObjEntity = context.Categories.ToList().Last();
                return $"Category {ObjEntity.CategoryName} is added successfully and your id is {ObjEntity}";
            }
        }*/


        // DELETE: api/Cosutomer/5
        [HttpDelete("{id}")]
        public string Deletes([FromBody] int id)
        {
            try
            {
                var dataDelete = context.Shipments.Single(s => s.ShipmentId == id);
                Category.Delete(dataDelete);
                return "Shipment is remove successfully";
            }
            catch (Exception)
            {
                return $"Shipment is not found...";
            }
        }
    }
}
