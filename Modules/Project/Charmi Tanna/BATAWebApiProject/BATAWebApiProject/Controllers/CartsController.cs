using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BATAWebApiProject.Models;
using BATAWebAPI.Models.IRepository;
using Microsoft.AspNetCore.Authorization;
using BATAWebApiProject.Authentication;

namespace BATAWebApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartsController : ControllerBase
    {
        ICart cart;

        public CartsController(ICart cart)
        {
            this.cart = cart;
        }
        //private readonly BATAContext _context;

        //public CartsController(BATAContext context)
        //{
        //    _context = context;
        //}

        // GET: api/Carts
        [Authorize(Roles = UserRoles.User)]
        [HttpGet]
        public IEnumerable<Models.Cart> GetCarts()
        {
            return cart.GetAll();
        }
        [Authorize(Roles = UserRoles.User)]
        [HttpGet("{id}")]
        public ActionResult<Cart> GetCartById(int id)
        {
            var cart1 = cart.GetById(id);

            if (cart1 == null)
            {
                return NotFound();
            }

            return Ok(cart1);
        }

        //// PUT: api/Carts/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.User)]
        [HttpPut("{id}")]
        public ActionResult<Cart> PutCart(int id, Cart carts)
        {
            if (id != carts.CartId)
            {
                return BadRequest();
            }
            cart.Update(id, carts);
            return carts;
        }

        // POST: api/Carts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.User)]
        [HttpPost]
        public ActionResult<Cart> PostCart(Cart carts)
        {
            cart.Create(carts);
            return carts;
        }

        //// DELETE: api/Carts/5
        [Authorize(Roles = UserRoles.User)]
        [HttpDelete("{id}")]
        public void DeleteCart(int id)
        {
            var cart1 = cart.Find(i => i.CartId == id).Single();
            cart.Delete(cart1);
            return;
        }
    }
}
