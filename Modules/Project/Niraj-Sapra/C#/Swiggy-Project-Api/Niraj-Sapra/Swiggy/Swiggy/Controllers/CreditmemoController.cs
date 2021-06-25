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
    public class CreditmemoController : ControllerBase
    {
        private readonly Swiggy_ProjectContext context;
        ICreditmemo Creditmemo;
        public CreditmemoController(ICreditmemo custo, Swiggy_ProjectContext _context)
        {
            this.Creditmemo = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Creditmemo> AddNewDataMethod()
        {
            return Creditmemo.GetAll();
        }
  
        [HttpPost]
        public string creates([FromBody] Creditmemo addCreditmemo)
        {
            Creditmemo check = context.Creditmemos.FirstOrDefault(s => s.CreditmemoId == addCreditmemo.CreditmemoId);
            if (check != null)
            {
                return "Category is already exists...";
            }
            else
            {
                Creditmemo.Create(addCreditmemo);
                Creditmemo addedCreditmemo = context.Creditmemos.ToList().Last();
                return $"Creditmemo {addedCreditmemo.CreditmemoId} is added successfully and your id is ";
            }
        }

        [HttpGet("{​id}​")]
        public ActionResult<Creditmemo> GetCreditmemos(int id)
        {
            var creditmemos = Creditmemo.GetById(id);

            if (creditmemos == null)
            {
                return NotFound();
            }
            return creditmemos;
        }

        [HttpDelete("{​id}​")]
        public IActionResult DeleteCreditmemo(int id)
        {
            var credites = Creditmemo.GetById(id);
            if (credites == null)
            {
                return NotFound();
            }

            Creditmemo.Delete(credites);

            return NoContent();
        }

        //Put

        [HttpPut("{​id}​")]
        public ActionResult<Creditmemo> PutMovie(int id, Creditmemo creditmemo)
        {
            try
            {
                Creditmemo.Update(creditmemo);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return GetCreditmemos(id);

        }
    }
}
