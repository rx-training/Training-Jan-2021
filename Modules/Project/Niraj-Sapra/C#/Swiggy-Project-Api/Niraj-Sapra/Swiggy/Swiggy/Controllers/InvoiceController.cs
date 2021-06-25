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
    public class InvoiceController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        IInvoice Category;
        public InvoiceController(IInvoice custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.Invoice> AddNewDataMethod()
        {
            return Category.GetAll();
        }


        /*[HttpPost]
        public string creates([FromBody] Invoice obEntity)
        {

            Invoice check = context.Invoices.FirstOrDefault(s => s. == obEntity.CategoryName);
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
                var dataDelete = context.Invoices.Single(s => s.InvoiceId == id);
                Category.Delete(dataDelete);
                return "Invoice is remove successfully";
            }
            catch (Exception)
            {
                return $"Invoice is not found...";
            }
        }
    }
}
