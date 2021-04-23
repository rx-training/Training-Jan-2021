using Assignmwnt10.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Assignmwnt10
{
    public class ToyDBContext : DbContext
    {

        public DbSet<Customer> Customers { get; set; }
        public DbSet<ManufacturingPlant> ManufacturingPlants { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Toy> Toys { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=LAPTOP-N1UDT3G5;Initial Catalog=Toys;Integrated Security=True;Pooling=False");
        }
    }
}
