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
    public class QuoteItemController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        IQuoteItem Category;
        public QuoteItemController(IQuoteItem custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.QuoteItem> AddNewDataMethod()
        {
            return Category.GetAll();
        }


       /* [HttpPost]
        public string creates([FromBody] QuoteItem obEntity)
        {

            QuoteItem check = context.QuoteItems.FirstOrDefault(s => s.QuoteItemId == obEntity.CategoryName);
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
                var dataDelete = context.QuoteItems.Single(s => s.QuoteItemId == id);
                Category.Delete(dataDelete);
                return "QuoteItem is remove successfully";
            }
            catch (Exception)
            {
                return $"QuoteItem is not found...";
            }
        }
    }
}
