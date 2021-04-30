using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UberAPI.Models;
using UberAPI.Models.Auth;

namespace UberAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OffersController : ControllerBase
    {
        private readonly UberContext _context;

        public OffersController(UberContext context)
        {
            _context = context;
        }

        // GET: api/Offers/rider/{id}
        [Authorize(Roles = UserRoles.RiderRole + "," + UserRoles.AdminRole)]
        [HttpGet("rider/{id}")]
        public async Task<ActionResult<IEnumerable<Offer>>> GetOffers(long id)
        {
            return await _context.Offers.ToListAsync();
        }

        // GET: api/Offers/{oid}/rider/{id}
        [Authorize(Roles = UserRoles.RiderRole + "," + UserRoles.AdminRole)]
        [HttpGet("{oid}/rider/{id}")]
        public async Task<ActionResult<Offer>> GetOffer(long id, long oid)
        {
            var offer = await _context.Offers.FindAsync(id);

            if (offer == null)
            {
                return NotFound();
            }

            return offer;
        }

        // POST: api/Offers
        [Authorize(Roles = UserRoles.AdminRole)]
        [HttpPost]
        public async Task<ActionResult<Offer>> PostOffer(Offer offer)
        {
            _context.Offers.Add(offer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOffer", new { id = offer.OfferId }, offer);
        }

        // POST: api/Offers/{oid}
        [Authorize(Roles = UserRoles.AdminRole)]
        [HttpPost("{oid}")]
        public async Task<ActionResult<Offer>> AssignOfferToRiders(long oid, List<long> riderIds)
        {
            _context.Offers.Add(offer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOffer", new { id = offer.OfferId }, offer);
        }

        // POST: api/Offers/{oid}/disable
        // POST: api/Offers/{oid}/enable
        [Authorize(Roles = UserRoles.AdminRole)]
        [HttpPost("{oid}/{action}")]
        public async Task<ActionResult<Offer>> DisableOffers(long oid, List<long> riderIds, string action)
        {
            _context.Offers.Add(offer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOffer", new { id = offer.OfferId }, offer);
        }

        private bool OfferExists(long id)
        {
            return _context.Offers.Any(e => e.OfferId == id);
        }
    }
}
