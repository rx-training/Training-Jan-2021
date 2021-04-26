using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToyCompanyAPI.IRepository;
using ToyCompanyAPI.Models;

namespace ToyCompanyAPI.Repository
{
    public class CustomerRepository : GenericRepository<Customer>, ICustomer
    {
        public CustomerRepository(ToyCompanyDBContext context) : base(context)
        {

        }

        public override void Create(Customer customer)
        {
            context.Customers.Add(new Customer()
            {
                FirstName = customer.FirstName,
                LastName = customer.LastName,
                Address = customer.Address,
                Contact = customer.Contact
            });

            context.SaveChanges();
        }

        public void CreateShipTo(int customerId, ShipTo shipTo)
        {
            context.ShipTos.Add(new ShipTo()
            {
                Address = shipTo.Address,
                City = shipTo.City,
                State = shipTo.State,
                Country = shipTo.Country,
                CustomerId = customerId
            });

            context.SaveChanges();
        }

        public override void Update(int id, Customer entity)
        {
            var existingCustomer = context.Customers.Where(s => s.Id==id)
                                                    .SingleOrDefault<Customer>();

            existingCustomer.FirstName = entity.FirstName;
            existingCustomer.LastName = entity.LastName;
            existingCustomer.Address = entity.Address;
            existingCustomer.Contact = entity.Contact;

            context.SaveChanges();

        }

        public override void Delete(int id)
        {
            var customer = context.Customers
                .Where(s => s.Id == id)
                .SingleOrDefault();

            context.Customers.Remove(customer);
            context.SaveChanges();
        }

        public void DeleteShipTo(int customerId, int shipToId)
        {
            var customer = context.ShipTos
                .Where(s => s.Id == shipToId)
                .SingleOrDefault();

            context.ShipTos.Remove(customer);
            context.SaveChanges();
        }
    }
}
