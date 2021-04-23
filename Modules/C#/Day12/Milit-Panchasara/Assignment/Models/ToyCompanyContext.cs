using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment.Models
{
    class ToyCompanyContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder)
        {
            dbContextOptionsBuilder.UseSqlServer("Data Source=DESKTOP-J0O4MON\\SQLEXPRESS;Database=ToyCompany;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<CustomerAddress> CustomerAddresses { get; set; }
        public DbSet<Toy> Toys { get; set; }
        public DbSet<Plant> Plants { get; set; }
        public DbSet<PlantOfToy> PlantOfToys { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Offer> Offers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>()
                .HasIndex(x => x.Email)
                .IsUnique();

            modelBuilder.Entity<Customer>()
                        .HasMany<CustomerAddress>(x => x.CustomerAddresses)
                        .WithOne(x => x.Customer)
                        .HasForeignKey(x => x.CustomerId).OnDelete(DeleteBehavior.Cascade); // defined onDelete behavior

            modelBuilder.Entity<PlantOfToy>()
                        .HasKey(x => new { x.PlantId, x.ToyId });

        }
    }
}
