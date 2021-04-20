using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace Day12_13Assignment.Models
{
    public class ToyCompanyDBContext : DbContext
    {
        public ToyCompanyDBContext()
        {
        }

        public ToyCompanyDBContext(DbContextOptions<ToyCompanyDBContext> options)
            : base(options)
        {
        }

        public DbSet<ManufacturingPlant> ManufacturingPlants { get; set; }
        public DbSet<Toy> Toys { get; set; }
        public DbSet<ToyCategory> ToyCategories { get; set; }
        public DbSet<ManufacturingPlantToy> ManufacturingPlantToys { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<ShipTo> ShipTos { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=LAPTOP-NLRDC1FB\SQLEXPRESS01;Database=ToyCompanyDB;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // One to Many relationship between Toys Category and Toys
            modelBuilder.Entity<Toy>()
                    .HasOne<ToyCategory>(s => s.ToyCategory)
                    .WithMany(g => g.Toys)
                    .HasForeignKey(s => s.ToyCategoryId);

            // Many to Many Relationship between Manufacturing Plants and Toys
            modelBuilder.Entity<ManufacturingPlantToy>().HasKey(sc => new { sc.ManufacturingPlantId, sc.ToyId });

            modelBuilder.Entity<ManufacturingPlantToy>()
                .HasOne<ManufacturingPlant>(sc => sc.ManufacturingPlant)
                .WithMany(s => s.ManufacturingPlantToys)
                .HasForeignKey(sc => sc.ManufacturingPlantId);


            modelBuilder.Entity<ManufacturingPlantToy>()
                .HasOne<Toy>(sc => sc.Toy)
                .WithMany(s => s.ManufacturingPlantToys)
                .HasForeignKey(sc => sc.ToyId);

            // Composite Key in OrderDetail Table
            modelBuilder.Entity<OrderDetail>().HasKey(sc => new { sc.OrderId, sc.ToyId, sc.ShipToId });

            // One to Many relationship between Customer and Ship To Addresss
            modelBuilder.Entity<ShipTo>()
                    .HasOne<Customer>(s => s.Customer)
                    .WithMany(g => g.ShipTos)
                    .HasForeignKey(s => s.CustomerId);

            // One to Many relationship between Customer and Order
            modelBuilder.Entity<Order>()
                    .HasOne<Customer>(s => s.Customer)
                    .WithMany(g => g.Orders)
                    .HasForeignKey(s => s.CustomerId);

            // One to Many relationship between OrderDetail and Order
            modelBuilder.Entity<OrderDetail>()
                    .HasOne<Order>(s => s.Order)
                    .WithMany(g => g.OrderDetails)
                    .HasForeignKey(s => s.OrderId);

            // One to Many relationship between OrderDetail and Toy
            modelBuilder.Entity<OrderDetail>()
                    .HasOne<Toy>(s => s.Toy)
                    .WithMany(g => g.OrderDetails)
                    .HasForeignKey(s => s.ToyId);

            // One to Many relationship between OrderDetail and ShipTo
            modelBuilder.Entity<OrderDetail>()
                    .HasOne<ShipTo>(s => s.ShipTo)
                    .WithMany(g => g.OrderDetails)
                    .HasForeignKey(s => s.ShipToId)
                    .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
