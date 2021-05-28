using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using ToyAssignment.Model;

namespace ToyAssignment.Models
{
    class Toycontext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Toyplant> Toyplants { get; set; }
        public DbSet<Toy> Toys { get; set; }
        public DbSet<Offer> Offers { get; set; }
        public DbSet<Order> Orders { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-FPEESG3;Initial Catalog=ToyCompony;Integrated Security=True");
        }
    }
}
