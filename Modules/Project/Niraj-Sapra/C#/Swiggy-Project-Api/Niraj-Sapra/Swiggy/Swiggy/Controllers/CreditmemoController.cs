using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swiggy.Authentication;
using Swiggy.Models;
using Swiggy.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Swiggy.Controllers
{
    [Authorize(Roles = UserRoles.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class CreditmemoController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        ICreditmemo Category;
        public CreditmemoController(ICreditmemo custo, Swiggy_ProjectContext _context)
        {
            this.Category = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Models.Creditmemo> AddNewDataMethod()
        {
            return Category.GetAll();
        }


        /*[HttpPost]
        public string creates([FromBody] Creditmemo obEntity)
        {

            Creditmemo check = context.Creditmemos.FirstOrDefault(s => s. == obEntity.CategoryName);
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
                var dataDelete = context.Creditmemos.Single(s => s.CreditmemoId == id);
                Category.Delete(dataDelete);
                return "Craditmemo is remove successfully";
            }
            catch (Exception)
            {
                return $"Creditmemo is not found...";
            }
        }
    }
}
