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
    public class OfferController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        IOffer Category;
        public OfferController(IOffer custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.Offer> AddNewDataMethod()
        {
            return Category.GetAll();
        }


/*        [HttpPost]
        public string creates([FromBody] Offer obEntity)
        {

            Offer check = context.off  .FirstOrDefault(s => s.CategoryName == obEntity.CategoryName);
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
                var dataDelete = context.Offers.Single(s => s.OfferId == id);
                Category.Delete(dataDelete);
                return "Offer is remove successfully";
            }
            catch (Exception)
            {
                return $"Offer is not found...";
            }
        }
    }
}
