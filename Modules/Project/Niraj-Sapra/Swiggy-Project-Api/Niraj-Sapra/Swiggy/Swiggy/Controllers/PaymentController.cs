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
    public class PaymentController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        IPayment Category;
        public PaymentController(IPayment custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.Payment> AddNewDataMethod()
        {
            return Category.GetAll();
        }

/*
        [HttpPost]
        public string creates([FromBody] Payment obEntity)
        {

            Payment check = context.Payments.FirstOrDefault(s => s.p == obEntity.CategoryName);
            if (check != null)
                //new Exception("Create is already exists...");
                return "Customer is already exists...";
            else
            {
                Category.Create(obEntity);
                Category ObjEntity = context.Categories.ToList().Last();
                return $"Category {ObjEntity.CategoryName} is added successfully and your id is {ObjEntity}";
            }
        }
*/

        // DELETE: api/Cosutomer/5
        [HttpDelete("{id}")]
        public string Deletes([FromBody] int id)
        {
            try
            {
                var dataDelete = context.Payments.Single(s => s.PaymentId == id);
                Category.Delete(dataDelete);
                return "Payment is remove successfully";
            }
            catch (Exception)
            {
                return $"Payment is not found...";
            }
        }
    }
}