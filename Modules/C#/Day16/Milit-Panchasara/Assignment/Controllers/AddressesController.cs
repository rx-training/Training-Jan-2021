using Assignment.Code.Interfaces;
using Assignment.Code.SqlServer;
using Assignment.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Controllers
{
    [Route("api/customers/{cid}/[controller]")]
    [ApiController]
    public class AddressesController : ControllerBase
    {
        private readonly IAddressRepository address;

        public AddressesController(IAddressRepository address)
        {
            this.address = address;
        }

        // GET: api/<AddressesController>
        [HttpGet]
        public ActionResult<IEnumerable<CustomerAddress>> Get(int cid)
        {
            var addresses = address.GetAllAddress(cid);
            return addresses.ToList();
        }

        // GET api/<AddressesController>/5
        [HttpGet("{id}")]
        public string Get(int cid, int id)
        {
            return "value";
        }

        // POST api/<AddressesController>
        [HttpPost]
        public ActionResult<IEnumerable<CustomerAddress>> Post(int cid, [FromBody] IEnumerable<CustomerAddress> request)
        {
            var addresses = address.CreateAddress(cid, request);
            if(addresses == null)
            {
                return BadRequest();
            }
            else
            {
                return addresses.ToList();
            }
        }
    }
}
