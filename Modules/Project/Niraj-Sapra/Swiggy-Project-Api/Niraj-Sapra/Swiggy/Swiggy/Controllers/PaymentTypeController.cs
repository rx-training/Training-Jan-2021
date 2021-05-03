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
    public class PaymentTypeController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        IPaymentType Category;
        public PaymentTypeController(IPaymentType custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.PaymentType> AddNewDataMethod()
        {
            return Category.GetAll();
        }

/*
        [HttpPost]
        public string creates([FromBody] PaymentType obEntity)
        {

            PaymentType check = context.PaymentTypes.FirstOrDefault(s => s.PaymentTypeId == obEntity.CategoryName);
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
                var dataDelete = context.PaymentTypes.Single(s => s.PaymentTypeId == id);
                Category.Delete(dataDelete);
                return "PaymentType is remove successfully";
            }
            catch (Exception)
            {
                return $"PaymentType is not found...";
            }
        }
    }
}
