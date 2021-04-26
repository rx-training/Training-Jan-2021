using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EFAssignment_Day12.Models
{
    public class ToyManufacturingContext : DbContext
    {
        public DbSet<ManufacturingPlant> ManufacturingPlants { get; set; }
        public DbSet<Toys> Toys { get; set; }
        public DbSet<Customers> Customers { get; set; }
        public DbSet<Addresses> Addresses { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<OrderToys> OrderToys { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder contextOptionsBuilder)
        {
            contextOptionsBuilder.UseSqlServer(@"Server=DESKTOP-G7G6FSU\SQLEXPRESS;Database=ToyManufacturing;Trusted_Connection=True;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // FK in Toys
            modelBuilder.Entity<Toys>()
                .HasOne<ManufacturingPlant>(m => m.ManufacturingPlant)
                .WithMany(t => t.Toys)
                .HasForeignKey(m => m.PlantId);

            // FK in Address for Customer table
            modelBuilder.Entity<Addresses>()
                .HasOne<Customers>(c => c.Customers)
                .WithMany(a => a.Addresses)
                .HasForeignKey(c => c.CustId);

            // FK in Order for Address table
            //modelBuilder.Entity<Orders>()
            //    .HasOne<Addresses>(a => a.Addresses)
            //    .WithMany(o => o.Orders)
            //    .HasForeignKey(a => a.AdId);

            // FK in Order for Customer table
            //modelBuilder.Entity<Orders>()
            //    .HasOne<Customers>(c => c.Customers)
            //    .WithMany(o => o.Orders)
            //    .HasForeignKey(c => c.CustId)
            //    .OnDelete(DeleteBehavior.ClientCascade); 

            // For M-M relationship 
            modelBuilder.Entity<OrderToys>()
                .HasKey(x => new { x.ToyId, x.OrderId });
        }
    }
}
