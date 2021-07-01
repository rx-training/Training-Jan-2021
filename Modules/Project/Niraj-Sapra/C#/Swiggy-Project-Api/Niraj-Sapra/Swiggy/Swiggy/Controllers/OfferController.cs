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
        IOffer Offer;
        public OfferController(IOffer custo, Swiggy_ProjectContext _context)
        {
            this.Offer = custo;
            this.context = _context;
        }

        [HttpGet]
        public IEnumerable<Offer> AddNewOfferDataMethod()
        {
            return Offer.GetAll();
        }

        [HttpPost]
        public string creates([FromBody] Offer addOffer)
        {

            Offer check = context.Offers.FirstOrDefault(s=>s.OfferId  == addOffer.OfferId);
            if (check != null)
                //new Exception("Create is already exists...");
                return "Customer is already exists...";
            else
            {
                Offer.Create(addOffer);
                Offer addedOffer = context.Offers.ToList().Last();
                return $"Doctor {addedOffer.OfferId} is added successfully and your id is ";
            }
        }
    }
}
