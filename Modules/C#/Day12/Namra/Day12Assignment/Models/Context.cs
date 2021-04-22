using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Day12Assignment.Models
{
    class Context : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Toy> Toys { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<TypeOfToy> TypeOfToys { get; set; }
        public DbSet<Plant> Plants { get; set; }
        public DbSet<Offer> Offers { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.\SQLEXPRESS01;Database=Day12Assignment;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Offer has offerValue key
            modelBuilder.Entity<Offer>()
                .HasKey(s => s.offerValue);
            //has one to many relation with order's bill
            modelBuilder.Entity<Offer>()
                .HasMany<Order>(s => s.Orders)
                .WithOne(s => s.Offer);

            // Customer has customerId as primary key
            modelBuilder.Entity<Customer>()
                .HasKey(s => s.CustomerId);
            // One customer may have number of orders
            modelBuilder.Entity<Customer>()
                .HasMany<Order>(s => s.Orders)
                .WithOne(s => s.Customer);
                

            //Toy has toyid as primary key
            modelBuilder.Entity<Toy>()
                .HasKey(s => s.ToyId);
            //number of toys will have one plant
            modelBuilder.Entity<Toy>()
                .HasOne<Plant>(s => s.Plant)
                .WithMany(s => s.Toys)
                .HasForeignKey(s=> s.PlantId);
            //number of toys may have one type
            modelBuilder.Entity<Toy>()
                .HasOne<TypeOfToy>(s => s.TypeOfToy)
                .WithMany(s => s.Toys)
                .HasForeignKey(s => s.TypeId);

            // orders have orderid as primary key
            modelBuilder.Entity<Order>()
                .HasKey(s => s.OrderId);
            //many orders may have one offer
            modelBuilder.Entity<Order>()
                .HasOne<Offer>(s => s.Offer)
                .WithMany(r => r.Orders)
                .HasForeignKey(s => s.offerValue);
            //So many orders may have one customer
            modelBuilder.Entity<Order>()
                .HasOne<Customer>(s => s.Customer)
                .WithMany(s => s.Orders)
                .HasForeignKey(s => s.CustomerId);

            modelBuilder.Entity<Plant>()
                .HasKey(s => s.PlantId);



            modelBuilder.Entity<TypeOfToy>()
                .HasKey( s => s.TypeId);

            
        }
    }
}
