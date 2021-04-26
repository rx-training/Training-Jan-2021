using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Models
{
    class ToyDBContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer(@"Data Source=DESKTOP-6QD72V0;Initial Catalog=Toys;Integrated Security=True;Pooling=False");
        }

        public DbSet<Plant> Plants { get; set; }
        public DbSet<Toy> Toys { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<ShipToAddress> ShipToAddresses { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
