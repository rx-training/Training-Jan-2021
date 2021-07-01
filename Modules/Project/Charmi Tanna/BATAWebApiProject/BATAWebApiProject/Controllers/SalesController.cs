using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BATAWebApiProject.Models;
using BATAWebAPI.Models.IRepository;
using BATAWebApiProject.Authentication;
using Microsoft.AspNetCore.Authorization;

namespace BATAWebApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        //private readonly BATAContext _context;

        //public SalesController(BATAContext context)
        //{
        //    _context = context;
        //}
        ISale sale;

        public SalesController(ISale sale)
        {
            this.sale = sale;
        }

        // GET: api/Sales
        [Authorize(Roles = UserRoles.Admin)]

        [HttpGet]
        public IEnumerable<Models.Sale> GetSale()
        {
            return sale.GetAll();
        }


        // GET: api/Sales/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpGet("{id}")]
        public ActionResult<Sale> GetSaleById(int id)
        {
            var sale1 = sale.GetById(id);

            if (sale1 == null)
            {
                return NotFound();
            }

            return Ok(sale1);
        }

        //// PUT: api/Sales/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public ActionResult<Sale> PutSale(int id, Sale sales)
        {
            if (id != sales.SaleId)
            {
                return BadRequest();
            }
            sale.Update(id, sales);
            return sales;
        }

        // POST: api/Sales
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public ActionResult<Sale> PostSale(Sale sales)
        {
            sale.Create(sales);
            return sales;
        }

        //// DELETE: api/Sales/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public void DeleteSale(int id)
        {
            var sale1 = sale.Find(i => i.SaleId == id).Single();
            sale.Delete(sale1);
            return;
        }
    }
}
