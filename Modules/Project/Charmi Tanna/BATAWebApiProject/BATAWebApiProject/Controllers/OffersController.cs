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
    public class OffersController : ControllerBase
    {
        //private readonly BATAContext _context;

        //public OffersController(BATAContext context)
        //{
        //    _context = context;
        //}
        IOffer offer;
        public OffersController(IOffer offer)
        {
            this.offer = offer;
        }
        // GET: api/Offers
        [HttpGet]
        public IEnumerable<Models.Offer> GetOffer()
        {
            return offer.GetAll();
        }
        [HttpGet("{id}")]
        public ActionResult<Offer> GetOfferById(int id)
        {
            var offer1 = offer.GetById(id);

            if (offer1 == null)
            {
                return NotFound();
            }

            return Ok(offer1);
        }

        //// PUT: api/Offers/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("{id}")]
        public ActionResult<Offer> PutOffer(int id, Offer offers)
        {
            if (id != offers.VoucherCode)
            {
                return BadRequest();
            }
            offer.Update(id, offers);
            return offers;
        }

        // POST: api/Offers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost]
        public ActionResult<Offer> PostOffer(Offer offers)
        {
            offer.Create(offers);
            return offers;
        }

        //// DELETE: api/Offers/5
        [Authorize(Roles = UserRoles.Admin)]
        [HttpDelete("{id}")]
        public void DeleteOffer(int id)
        {
            var offer1 = offer.Find(i => i.VoucherCode == id).Single();
            offer.Delete(offer1);
            return;
        }
    }
}
