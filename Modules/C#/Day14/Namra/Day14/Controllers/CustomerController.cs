using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day14.Models;
using Day14.Models.IRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Day14.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        
        private readonly Day14AssignmentContext context;
        ICustomer customer;
        public CustomerController(ICustomer customer, Day14AssignmentContext _context)
        {
            context = _context;
            this.customer = customer;
        }
        

        //To get all customer
        [HttpGet]
        public IEnumerable<Models.Customer> GetAll()
        {
            return customer.GetAll();
        }
        // To Get customer by Id
        [HttpGet("{id}")]
        public Models.Customer GetById(int id)
        {
            return customer.GetById(id);
        }
        // Will find customer by its id
        [HttpGet("{FindId}")]
        public IEnumerable<Models.Customer> FindByID(int FindId)
        {
            return customer.Find(s => s.CustomerId == FindId);
        }
        [HttpGet("{FindName}")]
        public IEnumerable<Models.Customer> FindByName(string FindName)
        {
            return customer.Find(s => s.CustomerName.ToLower() == FindName.ToLower());
        }
        [HttpPost]
        public string Create([FromBody]Models.Customer newOne)
        {
            try
            {
                customer.Create(newOne);
                newOne = context.Customers.ToList().Last();
                return $"Customer id is : {newOne.CustomerId}";
            }
            catch (Exception)
            {
                return $"Customer is not added";
            }
        }
        [HttpPut]
        public string Update([FromBody] Models.Customer updateCustomer)
        {
            try
            {
                customer.Update(updateCustomer);
                return $"Customer {updateCustomer.CustomerId} is updated succesfully...";
            }
            catch (Exception)
            {
                return $"Customer is not updated..";
            }
        }
        [HttpDelete("{DeleteId}")]
        public string Delete(int DeleteId)
        {
            try
            {
                Models.Customer delCustomer = customer.GetById(DeleteId);
                customer.Delete(delCustomer);
                return $"Customer of id {DeleteId} is deleted successfully...";
            }
            catch (Exception)
            {
                return $"Not deleted...";
            }
        }
        [HttpGet("{CountByName}")]
        public int CountByName(string CountByName)
        {
            return customer.Count(s=>s.CustomerName == CountByName);
        }
        [HttpGet("{CountByContact}")]
        public int CountByContact(string CountByContact)
        {
            return customer.Count(s => s.Contact == CountByContact);
        }
        [HttpGet]
        public bool Any()
        {
            return customer.Any();
        }
        [HttpGet("{AnyCustomerName}")]
        public bool Any(string AnyCustomerName)
        {
            return customer.Any(s => s.CustomerName == AnyCustomerName);
        }
    }
}
