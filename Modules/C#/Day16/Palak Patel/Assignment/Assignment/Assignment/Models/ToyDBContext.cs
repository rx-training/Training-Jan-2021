using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Assignment.Models
{
    public class ToyDBContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer(@"Data Source=DESKTOP-6QD72V0;Initial Catalog=UpdatedToysDB;Integrated Security=True;Pooling=False");
        }

        public DbSet<Plant> Plants { get; set; }
        public DbSet<Toy> Toys { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<ShipToAddress> ShipToAddresses { get; set; }
        public DbSet<Order> Orders { get; set; }

    }
}
